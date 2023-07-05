import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import img1 from "../assets/Postify_logo.png";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light"
        style={{ backgroundColor: "#ACACE6" }}
      >
        <div className="container-fluid justify-content-between">
          <div className="d-flex">
            <a
              className="navbar-brand me-2 mb-1 d-flex align-items-center"
              href="#"
            >
              <Link to="/" className="navbar-brand">
                <img
                  src={img1}
                  height="18"
                  alt="MDB Logo"
                  loading="lazy"
                  style={{ marginTop: "2px" }}
                />
              </Link>
            </a>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link
                className="text-light nav-link d-sm-flex align-items-sm-center"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <span>
                {user ? (
                  <>
                    <Link
                      to="/createPost"
                      className="text-light nav-link d-sm-flex align-items-sm-center"
                    >
                      <button className="btn btn-sm btn-light btn-rounded">
                        Create Post
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="text-light nav-link d-sm-flex align-items-sm-center"
                  >
                    Sign In
                  </Link>
                )}
              </span>
            </li>
            {user && (
              <li className="nav-item me-3 me-lg-1">
                <Link
                  to="/user"
                  className="nav-link d-sm-flex align-items-sm-center text-light"
                >
                  <img
                    src={
                      user?.photoURL ||
                      "https://static.thenounproject.com/png/363633-200.png"
                    }
                    className="rounded-circle"
                    height="22"
                    loading="lazy"
                  />
                  &nbsp;
                  {user?.displayName}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

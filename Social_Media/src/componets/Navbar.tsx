import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import img1 from "../assets/Postify_logo.png";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
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
                  height="20"
                  alt="MDB Logo"
                  loading="lazy"
                  style={{ marginTop: "2px" }}
                />
              </Link>
            </a>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span>
                  {user ? (
                    <>
                      <Link to="/createPost">
                        <button className="btn btn-sm btn-light">
                          Create Post
                        </button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/login" className="nav-link">
                      Sign In
                    </Link>
                  )}
                </span>
              </a>
            </li>
            {user && (
              <li className="nav-item me-3 me-lg-1">
                <a
                  className="nav-link d-sm-flex align-items-sm-center"
                  href="#"
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
                  <strong className="d-none d-sm-block ms-1">
                    <Link to="/user">{user?.displayName}</Link>
                  </strong>
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

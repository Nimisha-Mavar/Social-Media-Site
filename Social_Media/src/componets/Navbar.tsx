import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const googleSignup = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#E5E4E2" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="col-12 col-md-8 col-lg-6 col-xl-5"
            data-mdb-animation-start="onHover"
            data-mdb-animation="zoom-in"
          >
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <button
                  className="btn btn-lg btn-block"
                  style={{ backgroundColor: "#ACACE6" }}
                  type="submit"
                  onClick={googleSignup}
                >
                  <i className="fab fa-google me-2"></i> Sign in with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

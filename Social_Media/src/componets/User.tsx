import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const [user] = useAuthState(auth);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body  justify-content-center align-items-center">
          <h5 className="card-title">{user?.displayName}</h5>
          <button onClick={signUserOut} className="btn btn-primary">
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

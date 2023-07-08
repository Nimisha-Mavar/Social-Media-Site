import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface postData {
  postId: string;
}
export const Like = (postId: postData) => {
  const [user] = useAuthState(auth);
  const likeRef = collection(db, "Likes");

  const addLike = async () => {
    console.log(postId);
    await addDoc(likeRef, { postid: postId.postId, uid: user?.uid });
    console.log(user?.uid);
  };

  return (
    <>
      <div
        className="col-6"
        style={{ color: "#ACACE6", alignSelf: "end", fontSize: "15px" }}
      >
        <i className="bi bi-heart-fill float-end" onClick={addLike} />
        <i className="bi bi-heart float-end"></i>
      </div>
    </>
  );
};

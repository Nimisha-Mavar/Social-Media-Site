import { auth, db } from "../config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface postData {
  postId: string;
}

interface likeSchema {
  userId: string;
}
export const Like = (postId: postData) => {
  const [user] = useAuthState(auth);
  const likeRef = collection(db, "Likes");
  const likeData = query(likeRef, where("postid", "==", postId.postId));
  const [likes, setLikes] = useState<likeSchema[] | null>(null);
  const isUserLikes = likes?.find((like) => like.userId === user?.uid);

  const getLikes = async () => {
    const data = await getDocs(likeData);
    setLikes(data.docs.map((doc) => ({ userId: doc.data().uid })));
  };

  const addLike = async () => {
    try {
      await addDoc(likeRef, { postid: postId.postId, uid: user?.uid });
      if (user) {
        setLikes((prev) =>
          prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);
  return (
    <>
      <div
        className="col-6"
        style={{ color: "#ACACE6", alignSelf: "end", fontSize: "15px" }}
      >
        <i
          className={
            isUserLikes ? "bi bi-heart-fill float-end" : "bi bi-heart float-end"
          }
          onClick={addLike}
        />
        <br />
        {likes && <p>{likes.length}</p>}
      </div>
    </>
  );
};

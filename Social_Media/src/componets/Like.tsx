import { auth, db } from "../config/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface postData {
  postId: string;
}

interface likeSchema {
  userId: string;
  likeId: string;
}
export const Like = (postId: postData) => {
  const [user] = useAuthState(auth);
  const likeRef = collection(db, "Likes");
  const likeData = query(likeRef, where("postid", "==", postId.postId));
  const [likes, setLikes] = useState<likeSchema[] | null>(null);
  const isUserLikes = likes?.find((like) => like.userId === user?.uid);

  const getLikes = async () => {
    const data = await getDocs(likeData);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().uid, likeId: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const addNew = await addDoc(likeRef, {
        postid: postId.postId,
        uid: user?.uid,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: addNew.id }]
            : [{ userId: user.uid, likeId: addNew.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLike = async () => {
    {
      /*for select the deleted document*/
    }
    const deleteData = query(
      likeRef,
      where("postid", "==", postId.postId),
      where("uid", "==", user?.uid)
    );

    {
      /*for the get an document from the select query*/
    }
    const getDeleteDoc = getDocs(deleteData);

    {
      /*for get and docid from the document  */
    }
    const getDeleteId = doc(db, "Likes", (await getDeleteDoc).docs[0].id);
    const likeId = (await getDeleteDoc).docs[0].id;
    await deleteDoc(getDeleteId);
    if (user) {
      setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
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
          onClick={isUserLikes ? deleteLike : addLike}
        />
        <br />
        {likes && (
          <p style={{ fontSize: "10px" }} className="float-end">
            {likes.length}
          </p>
        )}
      </div>
    </>
  );
};

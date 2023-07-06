import { Post } from "./Post";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

interface Posts {
  title: string;
  description: string;
  uid: string;
  username: string;
  id: string;
}
export const Home = () => {
  const [posts, setPosts] = useState<Posts[] | null>(null);
  const ref = collection(db, "posts");

  const getPost = async () => {
    const data = await getDocs(ref);
    setPosts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
    );
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {posts?.map((post) => (
          <Post
            title={post.title}
            description={post.description}
            username={post.username}
          />
        ))}
      </div>
    </>
  );
};

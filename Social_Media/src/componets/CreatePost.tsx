import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookForm/resolvers/yup";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

interface postData {
  title: string;
  description: string;
}

export const CreatePost = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Must write title of the post"),
    description: yup.string().required("Must write description of the post"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const onCreatePost = async (data: postData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      uid: user?.uid,
    });
    navigate("/");
  };

  return (
    <>
      <section>
        <div className="row justify-content-center mt-5">
          <div className="card col-6" style={{ backgroundColor: "#E5E4E2" }}>
            <p className="text-center mt-2">
              <h3>Write Post</h3>
            </p>

            <form onSubmit={handleSubmit(onCreatePost)}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  {...register("title")}
                />
                <label className="form-label" htmlFor="form4Example1">
                  Title
                </label>
                <p style={{ color: "red" }}>{errors.title?.message}</p>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  {...register("description")}
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Description
                </label>
                <p style={{ color: "red" }}>{errors.description?.message}</p>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Publish
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

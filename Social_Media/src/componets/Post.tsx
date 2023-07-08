import { Like } from "./Like";

interface Props {
  title: string;
  description: string;
  username: string;
  pid: string;
}

export const Post = (Post: Props) => {
  return (
    <>
      <div className="col-5 mt-3 card">
        <div className="row">
          <div
            className="col-6"
            style={{ color: "#ACACE6", alignSelf: "start", fontSize: "12px" }}
          >
            @{Post.username}
          </div>
          <Like postId={Post.pid} />
        </div>

        <p className="fs-5">{Post.title}</p>
        <p className="fs-6">{Post.description}</p>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

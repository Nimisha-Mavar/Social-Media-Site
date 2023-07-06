interface Props {
  title: string;
  description: string;
  username: string;
}

export const Post = (Post: Props) => {
  return (
    <>
      <div className="col-5 mt-3 card">
        <span className="text-light text-left">{Post.username}</span>
        <p className="fs-4">{Post.title}</p>
        <p className="fs-6">{Post.description}</p>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

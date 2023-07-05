export const CreatePost = () => {
  return (
    <>
      <section>
        <div className="row justify-content-center mt-5">
          <div className="card col-6" style={{ backgroundColor: "#E5E4E2" }}>
            <p className="text-center mt-2">
              <h3>Write Post</h3>
            </p>

            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form4Example1">
                  Title
                </label>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Description
                </label>
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

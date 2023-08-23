import getViewPost from "@/utility/getViewPost";
const page = async ({ params }) => {
  const id = params.id;
  const viewPost = await getViewPost(id);

  return (
    <div>
      <div className="container mx-auto mb-2">
        {viewPost === null ? (
          <div>
            <h2>No Data</h2>
          </div>
        ) : (
          <div className="grid">
            <div className="card glass">
              <figure>
                <img src={viewPost.postDetails.img} alt="Post Img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {viewPost.postDetails.title} </h2>
                <p> {viewPost.postDetails.content} </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;

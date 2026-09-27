
function PostList({ posts }) {
  return (
    <div className="post-list-container">
      <h2>All Posts (Populated with User Info)</h2>
      {posts.length === 0 ? (
        <p className="no-data">
          No posts available. Create a user and post above!
        </p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="author-box">
              <strong>Author Details:</strong>
              <div>Name: {post.user?.name || "Unknown"}</div>
              <div>Email: {post.user?.email || "N/A"}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;

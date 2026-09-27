import React, { useState } from "react";
import { createPost } from "../Api/Api";

function PostForm({ users, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !selectedUserId) {
      return alert("Please fill all post fields and select a user");
    }

    try {
      await createPost({
        title,
        content,
        user: selectedUserId,
      });
      alert("Post created successfully!");

      // Trigger parent component to reload the post feed
      onPostCreated();

      // Reset form
      setTitle("");
      setContent("");
      setSelectedUserId("");
    } catch (error) {
      alert(
        "Error creating post: " +
          (error.response?.data?.message || error.message),
      );
    }
  };

  return (
    <div className="card">
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write something..."
            rows="3"
          />
        </div>
        <div className="form-group">
          <label>Assign to User:</label>

          {/* <select 
            value={selectedUserId} 
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">-- Select a User --</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
         */}

          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">-- Select a User --</option>

            {users && users.length > 0 ? (
              users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name} ({user.email})
                </option>
              ))
            ) : (
              <option value="" disabled>
                No users found
              </option>
            )}
          </select>
        </div>
        <button type="submit" className="btn-primary">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;

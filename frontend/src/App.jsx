import React, { useState, useEffect } from 'react';
import UserForm from './Components/UserForm';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import { fetchPosts, getUsers } from './Api/Api';
import "../src/Components/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch posts
  const loadPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  // Fetch users
  const loadUsers = async () => {
    try {
      const response = await getUsers();

      console.log("Users:", response.data);

      setUsers(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  // Load posts and users when page opens
  useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  // Add newly created user to dropdown
  const handleUserCreated = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="app-container">

      <header>
        <h1>References & Populate</h1>
        <p>
          Link Mongoose schemas and display populated data reactively.
        </p>
      </header>

      <main className="grid-split">

        <UserForm
          onUserCreated={handleUserCreated}
        />

        <PostForm
          users={users}
          onPostCreated={loadPosts}
        />

      </main>

      <section>
        <PostList posts={posts} />
      </section>

    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { createUser } from '../Api/Api';

function UserForm({ onUserCreated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert('Please fill in all user fields');

    try {
      const response = await createUser({ name, email });
      console.log("response-----",response)
      alert("User created successfully!");
      
      // Pass the newly created user back up to the parent component (App.jsx)
      onUserCreated(response.data);
      
      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      alert('Error creating user: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="card">
      <h3>Create User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="john@example.com"
          />
        </div>
        <button type="submit" className="btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;

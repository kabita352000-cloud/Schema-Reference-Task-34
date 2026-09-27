import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = (userData) => api.post('/users', userData);
export const createPost = (postData) => api.post('/posts', postData);
export const fetchPosts = () => api.get('/posts');
export const getUsers = () => api.get('/users');


export default api;

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Task 34 - Schema Reference

## Overview

This project demonstrates how to reference one Mongoose schema from another using MongoDB and Mongoose.

The project contains:

- A Node.js and Express.js backend
- MongoDB database using Mongoose
- User schema
- Post schema with a reference to the User schema
- REST API routes for users and posts
- React frontend
- Forms to create users and posts
- Post listing with populated user information

The main concept of this task is **Schema Reference**.

A `Post` belongs to a `User`, so the Post schema stores the MongoDB `_id` of the User as a reference.

---


# Task 34 - Schema Reference

## Problem Statement

Create an Express.js application that demonstrates referencing one Mongoose schema to another.

The application should:

1. Connect to MongoDB using Mongoose.
2. Create User and Post schemas.
3. Reference User schema from Post schema.
4. Create routes for users and posts.
5. Create a React frontend.
6. Create users and posts.
7. Display posts with related user information.

---

## Features

### Backend

* MongoDB with Mongoose
* User and Post schemas
* Schema reference using `ObjectId`
* Create User API
* Create Post API
* Get Posts API
* Mongoose `populate()`
* Controllers and routes
* CORS and `.env`

### Frontend

* React + Vite
* User form
* Post form
* Display posts
* Display user information
* API functions
* CSS styling

---

## Technologies

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* dotenv
* CORS

### Frontend

* React
* Vite
* JavaScript
* CSS
* Fetch API

---

## Project Structure

```text
Task34/
│
├── frontend/
│   └── src/
│       ├── Components/
│       │   ├── App.css
│       │   ├── UserForm.jsx
│       │   ├── PostForm.jsx
│       │   └── PostList.jsx
│       ├── Api/
│       │   └── Api.jsx
│       ├── App.jsx
│       └── main.jsx
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── user.controller.js
    │   │   └── post.controller.js
    │   ├── models/
    │   │   ├── user.models.js
    │   │   └── post.model.js
    │   └── routes/
    │       ├── index.js
    │       ├── user.routes.js
    │       └── post.routes.js
    ├── server.js
    ├── .env
    └── package.json
```

---

# Backend Setup

```bash
cd /Task34/backend
npm install
```

Create `.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/refAndPopulate
PORT=9000
```

### Run Backend

Development:

```bash
npm run dev
```

Normal:

```bash
npm start
```

Backend:

```text
http://localhost:9000
```

Backend scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

# Frontend Setup

```bash
cd /Task34/frontend
npm install
```

### Run Frontend

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Frontend scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

# API Routes

### Create User

```http
POST /users
```

```json
{
  "name": "Kabita",
  "email": "kabita@example.com"
}
```

### Create Post

```http
POST /posts
```

```json
{
  "title": "My First Post",
  "content": "Hello World",
  "user": "USER_ID"
}
```

### Get Posts

```http
GET /posts
```

Posts are returned with user information using Mongoose `populate()`.

---

# Schema Reference

```text
User
  |
  | ObjectId
  ↓
Post
```

The Post schema stores the User's `_id` as a reference.

---

# How to Run

Open **two terminals**.

### Terminal 1

```bash
cd /Task34/backend
npm run dev
```

### Terminal 2

```bash
cd /Task34/frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

The React frontend communicates with the Express backend running on port `9000`.



const express = require("express");

const {
getPosts,
  createPost,
  updatePost,
  updatePostStatus,
  searchPost,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

// Get all Posts
router.get("/", getPosts);

// Create Post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Update status
router.patch("/:id/status", updatePostStatus);

// search 
router.get("/search", searchPost);

// Delete Post
router.delete("/:id", deletePost);

module.exports = router;
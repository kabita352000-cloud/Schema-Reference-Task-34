const express = require("express");

const {
 getUsers,
  createUser,
  updateUser,
  updateUserStatus,
  searchUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

// Get all Users
router.get("/", getUsers);

// Create User
router.post("/", createUser);

// Update User
router.put("/:id", updateUser);

// Update status
router.patch("/:id/status", updateUserStatus);

// search 
router.get("/search", searchUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;
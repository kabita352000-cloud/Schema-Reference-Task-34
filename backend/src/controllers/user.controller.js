const User = require("../models/user.models");

// Get all Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get Users",
    });
  }
};

// Create User
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const User = await User.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!User) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update User",
    });
  }
};

// Update only status
const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const User = await User.findByIdAndUpdate(
      id,
      {
        completed,
      },
      {
        new: true,
      }
    );

    if (!User) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update User status",
    });
  }
};



// Search 
const searchUser = async (req, res) => {
  try {
    const { search } = req.query;
    const Users = await User.find({ title: { $regex: search, $options: "i" }, });
    if (Users.length === 0) {
      return res.status(404).json({ message: "No User found", });
    }
    res.status(200).json({ message: "User found successfully", Users, });
  }
  catch (error) { res.status(500).json({ message: "Failed to search User", }); }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await User.findByIdAndDelete(id);

    if (!User) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete User",
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  updateUserStatus,
  searchUser,
  deleteUser,
};
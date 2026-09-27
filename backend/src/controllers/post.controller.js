const Post = require("../models/post.model");

// Get all post
const getPosts = async (req, res) => {
    try {
     const posts = await Post.find()
  .populate("user", "name email")
  .sort({ _id: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Create Post
const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);

        res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Update Post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const Post = await Post.findByIdAndUpdate(
            id,
            {
                title,
                content,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!Post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.status(200).json(Post);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update Post",
        });
    }
};

// Update only status
const updatePostStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const Post = await Post.findByIdAndUpdate(
            id,
            {
                status,
            },
            {
                new: true,
            }
        );

        if (!Post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.status(200).json(Post);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update Post status",
        });
    }
};



// Search 
const searchPost = async (req, res) => {
    try {
        const { search } = req.query;
        const Posts = await Post.find({ title: { $regex: search, $options: "i" }, });
        if (Posts.length === 0) {
            return res.status(404).json({ message: "No Post found", });
        }
        res.status(200).json({ message: "Post found successfully", Posts, });
    }
    catch (error) { res.status(500).json({ message: "Failed to search Post", }); }
};

// Delete Post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const Post = await Post.findByIdAndDelete(id);

        if (!Post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.status(200).json({
            message: "Post deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete Post",
        });
    }
};

module.exports = {
    getPosts,
    createPost,
    updatePost,
    updatePostStatus,
    searchPost,
    deletePost,
};
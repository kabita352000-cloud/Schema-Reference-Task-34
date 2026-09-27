const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } // References the User schema
    ,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },

    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', PostSchema);
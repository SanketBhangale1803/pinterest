const mongoose = require('mongoose');

// defining post schema 
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [] //we will store user's id who likes a post so that we can know which user liked that post
  }
});

// creating Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;

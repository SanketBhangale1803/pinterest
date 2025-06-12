const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

//Creating a db section for the storage of user details
mongoose.connect('mongodb://127.0.0.1:27017/user-details');

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post' // Assuming there is a separate Post model
    }
  ],
  dp: {
    type: String // the profile picture is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    require: true
  }
});

// creating a user model

userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);

module.exports = User;

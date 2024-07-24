const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
        
    },
    password:{
        type: String,
        required: true,
    },
    userType:{
        type: Boolean,
        required: true,
    }
  });
  const Users = mongoose.model('User', usersSchema);

  module.exports = Users
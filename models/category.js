// https://www.youtube.com/watch?v=jK7mcMrYzj8
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: String
  });
  const Category = mongoose.model('category', categorySchema);

  module.exports = Category
// https://www.youtube.com/watch?v=jK7mcMrYzj8
const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: String,
    body: String
  });
  const Note = mongoose.model('note', noteSchema);

  module.exports = Note
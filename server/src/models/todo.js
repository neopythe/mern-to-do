const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Todo', todoSchema)

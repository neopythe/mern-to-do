const Todo = require('../models/todo')

const catchAsync = require('../util/catchAsync')

module.exports.index = catchAsync(async (req, res) => {
  const todos = await Todo.find()
  res.send(todos)
})

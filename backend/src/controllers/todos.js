const Todo = require('../models/todo')

const catchAsync = require('../util/catchAsync')

module.exports.index = catchAsync(async (req, res) => {
  const todos = await Todo.find()
  res.send(todos)
})

module.exports.createTodo = catchAsync(async (req, res) => {
  const { text } = req.body
  const todo = new Todo({ text })
  await todo.save()
  res.send('saved')
})

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
  res.send(todo)
})

module.exports.readTodo = catchAsync(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    return res.redirect('/todos')
  }
  res.send(todo)
})

module.exports.updateTodo = catchAsync(async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findByIdAndUpdate(id, {
    ...req.body,
  })
  await todo.save()
  res.redirect(`/todos/${todo._id}`)
})

module.exports.deleteTodo = catchAsync(async (req, res) => {
  const { id } = req.params
  await Todo.findByIdAndDelete(id)
  res.redirect('/todos')
})

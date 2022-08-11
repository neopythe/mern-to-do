const express = require('express')
const router = express.Router()

const {
  index,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos')

router.route('/todos').get(index).post(createTodo)

router.route('/todos/:id').get(readTodo).put(updateTodo).delete(deleteTodo)

module.exports = router

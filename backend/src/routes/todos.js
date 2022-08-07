const express = require('express')
const router = express.Router()

const todos = require('../controllers/todos')

router.get('/', function (req, res) {
  res.redirect('/todos')
})

router.route('/todos').get(todos.index).post(todos.createTodo)

module.exports = router

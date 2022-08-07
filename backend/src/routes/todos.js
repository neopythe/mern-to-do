const express = require('express')
const router = express.Router()

const todos = require('../controllers/todos')

router.get('/', function (req, res) {
  res.redirect('/todos')
})

router.get('/todos', todos.index)

module.exports = router

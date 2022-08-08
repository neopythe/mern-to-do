import { useEffect, useState } from 'react'

import readTodosRequest from './api/readTodosRequest'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    readTodosRequest().then(setTodos)
  }, [])

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  )
}

export default App

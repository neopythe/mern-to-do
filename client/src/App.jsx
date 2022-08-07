import { useEffect, useState } from 'react'

import readTodosRequest from './api/readTodosRequest'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    readTodosRequest().then(setTodos)
  }, [])

  return (
    <div className="App">
      {todos.map((todo) => (
        <div key={todo._id}>
          {todo.text} - {String(todo.completed)}
        </div>
      ))}
    </div>
  )
}

export default App

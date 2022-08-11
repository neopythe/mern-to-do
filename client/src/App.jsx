import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { TodoProvider } from './context/TodoContext'

import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  return (
    <TodoProvider>
      <Router>
        <div className="App">
          <NewTodoForm />
          <TodoList />
        </div>
      </Router>
    </TodoProvider>
  )
}

export default App

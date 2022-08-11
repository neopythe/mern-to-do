import { Routes, Route, Navigate } from 'react-router-dom'

import { TodoProvider } from './context/TodoContext'

import NewTodoForm from './components/NewTodoForm'
import TodoDetails from './components/TodoDetails'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navigate to="/todos" />} />
          <Route
            exact
            path="/todos"
            element={
              <>
                <NewTodoForm />
                <TodoList />
              </>
            }
          />
          <Route exact path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </TodoProvider>
  )
}

export default App

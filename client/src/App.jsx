import { TodoProvider } from './context/TodoContext'

import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <NewTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App

import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = `http://localhost:5000`

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState([])
  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false })

  useEffect(() => {
    readTodos()
  }, [])

  // create todo
  const createTodo = async (newTodo) => {
    const { data } = await axios.post(
      `${API_URL}/todos`,
      JSON.stringify(newTodo),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    setTodos([data, ...todos])
  }

  // read todos
  const readTodos = async () => {
    const { data } = await axios.get(`${API_URL}/todos`)
    setTodos(data)
    setIsLoading(false)
  }

  // set todo to be updated
  const editTodo = (todo) => {
    setTodoEdit({ todo, edit: true })
  }

  // update todo
  const updateTodo = async (id, todo, updatedTodo) => {
    const { data } = await axios.put(
      `${API_URL}/todos/${id}`,
      JSON.stringify(updatedTodo),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    )
    setTodoEdit({ todo, edit: false })
  }

  // delete todo
  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await axios.delete(`${API_URL}/todos/${id}`)
      setTodos(todos.filter((todo) => todo.id !== id))
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        todoEdit,
        createTodo,
        editTodo,
        updateTodo,
        deleteTodo,
        isLoading,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext

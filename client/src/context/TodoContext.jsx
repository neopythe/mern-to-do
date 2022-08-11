import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const database = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

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
    const { data } = await database.post('/todos', JSON.stringify(newTodo))
    setTodos([...todos, data])
  }

  // read todos
  const readTodos = async () => {
    const { data } = await database.get('/todos')
    setTodos(data)
    setIsLoading(false)
  }

  // set todo to be updated
  const editTodo = (todo) => {
    setTodoEdit({ todo, edit: true })
  }

  // update todo
  const updateTodo = async (id, todo, updatedTodo) => {
    const { data } = await database.put(
      `/todos/${id}`,
      JSON.stringify(updatedTodo)
    )
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    )
    setTodoEdit({ todo, edit: false })
  }

  // delete todo
  const deleteTodo = async (id) => {
    await database.delete(`/todos/${id}`)
    setTodos(todos.filter((todo) => todo._id !== id))
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

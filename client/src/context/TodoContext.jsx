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
  const updateTodo = async (newTodo) => {
    const { _id } = newTodo
    const { data } = await database.put(
      `/todos/${_id}`,
      JSON.stringify(newTodo)
    )
    setTodos(
      todos.map((todo) => (todo._id === _id ? { ...todo, ...data } : todo))
    )
    setTodoEdit({ newTodo, edit: false })
  }

  // delete todo
  const deleteTodo = async (_id) => {
    await database.delete(`/todos/${_id}`)
    setTodos(todos.filter((todo) => todo._id !== _id))
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

import { useContext } from 'react'

import TodoContext from '../context/TodoContext'

import Todo from './Todo'

export default function TodoList() {
  const { todos, isLoading } = useContext(TodoContext)

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo._id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  )
}

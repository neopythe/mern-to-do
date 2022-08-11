import { useContext } from 'react'
import { CircleLoader } from 'react-spinners'

import TodoContext from '../context/TodoContext'

import Todo from './Todo'

import { StyledTodoList, StyledUnorderedList } from './styles/TodoList.styles'

export default function TodoList() {
  const { todos, isLoading } = useContext(TodoContext)

  if (!isLoading && (!todos || todos.length === 0)) {
    return <p>No todos yet</p>
  }

  return (
    <StyledTodoList>
      <CircleLoader loading={isLoading} color="#fff" />
      <StyledUnorderedList>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </StyledUnorderedList>
    </StyledTodoList>
  )
}

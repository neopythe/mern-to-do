import { useContext } from 'react'
import { CircleLoader } from 'react-spinners'

import TodoContext from '../context/TodoContext'

import Todo from './Todo'

import { StyledTodoList, StyledUnorderedList } from './styles/TodoList.styles'

export default function TodoList() {
  const { todos, isLoading } = useContext(TodoContext)

  if (!isLoading && (!todos || todos.length === 0)) {
    return <p>no todos yet</p>
  }

  return isLoading ? (
    <div className="flex justify-center my-24">
      <CircleLoader loading={isLoading} color="#fff" />
    </div>
  ) : (
    <StyledTodoList>
      <StyledUnorderedList>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </StyledUnorderedList>
    </StyledTodoList>
  )
}

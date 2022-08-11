import { useContext } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

import TodoContext from '../context/TodoContext'

import { IconContainer, StyledTodo } from './styles/Todo.styles'

export default function Todo({ todo }) {
  const { _id, text, completed } = todo

  const { deleteTodo } = useContext(TodoContext)

  return (
    <StyledTodo>
      <p>{text}</p>
      <IconContainer>
        <label>
          <AiFillEdit />
        </label>
        <label
          onClick={() => {
            deleteTodo(_id)
          }}
        >
          <TiDelete />
        </label>
      </IconContainer>
    </StyledTodo>
  )
}

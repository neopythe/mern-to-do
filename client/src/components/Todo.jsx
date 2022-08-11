import { AiFillEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

import { IconContainer, StyledTodo } from './styles/Todo.styles'

export default function Todo({ todo }) {
  const { _id, text, completed } = todo

  return (
    <StyledTodo>
      <p>{text}</p>
      <IconContainer>
        <label>
          <AiFillEdit />
        </label>
        <label>
          <TiDelete />
        </label>
      </IconContainer>
    </StyledTodo>
  )
}

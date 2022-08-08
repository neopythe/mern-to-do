import { StyledTodo } from './styles/Todo.styles'

export default function Todo({ text, completed }) {
  return (
    <StyledTodo>
      <p>{text}</p>
      <p>{String(completed)}</p>
    </StyledTodo>
  )
}

import styled from 'styled-components'

const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: white;
  padding: 0 10px;
  color: red;
`

export default function Todo({ text, completed }) {
  return (
    <StyledTodo>
      <p>{text}</p>
      <p>{String(completed)}</p>
    </StyledTodo>
  )
}

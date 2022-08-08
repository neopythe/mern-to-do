import { StyledFieldset } from './styles/NewTodoForm.styles'

export default function NewTodoForm() {
  return (
    <form>
      <StyledFieldset>
        <label htmlFor="new-todo">new to-do</label>
        <input type="text" name="new-todo" />
      </StyledFieldset>
    </form>
  )
}

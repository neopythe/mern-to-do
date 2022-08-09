import { useContext, useState } from 'react'

import TodoContext from '../context/TodoContext'

import { StyledFieldset, StyledForm } from './styles/NewTodoForm.styles'

export default function NewTodoForm() {
  const { createTodo } = useContext(TodoContext)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    text.trim().length && createTodo({ text })
    setText('')
    setBtnDisabled(true)
  }

  const handleTextChange = ({ target: { value } }) => {
    value.trim() ? setBtnDisabled(false) : setBtnDisabled(true)
    setText(value)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        {/* <label htmlFor="new-todo">new to-do</label> */}
        <input
          onChange={handleTextChange}
          type="text"
          name="new-todo"
          placeholder="new to-do"
          value={text}
        />
      </StyledFieldset>
      <button disabled={btnDisabled}>Submit</button>
    </StyledForm>
  )
}

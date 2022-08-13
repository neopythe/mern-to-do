import { useContext, useState } from 'react'

import TodoContext from '../context/TodoContext'

import Button from './shared/Button'

import { StyledInput } from './styles/NewTodoForm.styles'

export default function NewTodoForm() {
  const { createTodo } = useContext(TodoContext)

  const [text, setText] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    text.trim().length && createTodo({ text })
    setText('')
    setButtonDisabled(true)
  }

  const handleTextChange = ({ target: { value } }) => {
    value.trim() ? setButtonDisabled(false) : setButtonDisabled(true)
    setText(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap sm:flex-nowrap sm:flex-row justify-between gap-2 my-8"
    >
      <fieldset className="flex w-full">
        {/* <label htmlFor="new-todo">new to-do</label> */}
        <StyledInput
          onChange={handleTextChange}
          type="text"
          name="new-todo"
          placeholder="new to-do"
          value={text}
          className="w-full sm:w-fit h-8 rounded-tl-lg sm:rounded-bl-lg pl-4"
        />
      </fieldset>
      <Button type={'submit'} isDisabled={buttonDisabled}>
        Submit
      </Button>
    </form>
  )
}

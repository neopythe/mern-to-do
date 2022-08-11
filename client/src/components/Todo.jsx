import { useContext, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

import TodoContext from '../context/TodoContext'

import Button from './shared/Button'

import {
  IconContainer,
  StyledForm,
  StyledTodoContainer,
} from './styles/Todo.styles'

export default function Todo({ todo }) {
  const { _id, text: todoText, completed } = todo

  const { deleteTodo, updateTodo, todoEdit, editTodo } = useContext(TodoContext)

  const [text, setText] = useState(todoText)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    text.trim().length && updateTodo(_id, todo, { _id, text, completed })
    setButtonDisabled(true)
  }

  const handleTextChange = ({ target: { value } }) => {
    value.trim() ? setButtonDisabled(false) : setButtonDisabled(true)
    setText(value)
  }

  const todoDisplay = (
    <StyledTodoContainer>
      <p>{text}</p>
      <IconContainer>
        <label onClick={() => editTodo(todo)}>
          <AiFillEdit />
        </label>
        <label onClick={() => deleteTodo(_id)}>
          <TiDelete />
        </label>
      </IconContainer>
    </StyledTodoContainer>
  )

  const todoForm = (
    <StyledForm onSubmit={handleSubmit}>
      <input onChange={handleTextChange} type="text" value={text} />
      <Button type={'submit'} isDisabled={buttonDisabled}>
        Save
      </Button>
    </StyledForm>
  )

  return todoEdit.edit && todoEdit.todo === todo ? todoForm : todoDisplay
}

import { useContext, useEffect, useRef, useState } from 'react'
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
  const { _id, text: todoText, completed: todoCompleted } = todo

  const { deleteTodo, updateTodo, todoEdit, editTodo } = useContext(TodoContext)

  const [text, setText] = useState(todoText)
  const [completed, toggleCompleted] = useState(todoCompleted)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    text.trim().length && updateTodo({ _id, text, completed })
    setButtonDisabled(true)
  }

  const handleTextChange = ({ target: { value } }) => {
    value.trim() ? setButtonDisabled(false) : setButtonDisabled(true)
    setText(value)
  }

  const toggleComplete = async () => {
    toggleCompleted((prevState) => !prevState)
  }

  useEffect(() => {
    updateTodo({ _id, text, completed })
  }, [completed])

  const completedStyles = { backgroundColor: 'green' }

  const todoDisplay = (
    <StyledTodoContainer
      style={completed ? completedStyles : { backgroundColor: 'red' }}
      className="bg-slate-800"
    >
      <div className="w-full text-start">
        <p onClick={toggleComplete} className="block py-4">
          {text}
        </p>
      </div>
      <IconContainer>
        <label onClick={() => editTodo(todo)}>
          <AiFillEdit size="1.2em" />
        </label>
        <label onClick={() => deleteTodo(_id)}>
          <TiDelete size="1.2em" />
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

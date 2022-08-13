import { useContext, useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

import TodoContext from '../context/TodoContext'

import useToggleState from '../hooks/useToggleState'

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
  const [isCompleted, toggleIsCompleted] = useToggleState(completed)
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    text.trim().length && updateTodo({ _id, text, completed: isCompleted })
  }

  const handleTextChange = ({ target: { value } }) => {
    value.trim() ? setButtonIsDisabled(false) : setButtonIsDisabled(true)
    setText(value)
  }

  useEffect(() => {
    updateTodo({ _id, text, completed: isCompleted })
  }, [isCompleted])

  const todoDisplay = (
    <StyledTodoContainer isCompleted={isCompleted} className="bg-slate-800">
      <div className="w-full text-start">
        <p onClick={() => toggleIsCompleted()} className="block py-4">
          {text}
        </p>
      </div>
      <IconContainer>
        <div onClick={() => editTodo(todo)}>
          <AiFillEdit size="1.2em" />
        </div>
        <div onClick={() => deleteTodo(_id)}>
          <TiDelete size="1.2em" />
        </div>
      </IconContainer>
    </StyledTodoContainer>
  )

  const todoForm = (
    <StyledForm onSubmit={handleSubmit}>
      <input onChange={handleTextChange} type="text" value={text} />
      <Button type={'submit'} isDisabled={buttonIsDisabled}>
        Save
      </Button>
    </StyledForm>
  )

  return todoEdit.edit && todoEdit.todo === todo ? todoForm : todoDisplay
}

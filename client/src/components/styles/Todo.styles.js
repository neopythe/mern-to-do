import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;

  & label {
    display: flex;
  }
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #696969;
  color: #fff;

  & input {
    height: 2rem;
  }

  & input:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #fff;
  }
`

export const StyledTodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #696969;
  color: #fff;
`

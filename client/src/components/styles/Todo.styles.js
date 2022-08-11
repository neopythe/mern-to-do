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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #696969;
  color: #fff;

  & input {
    height: 2rem;
    width: 100%;
    padding: 0;
    border: 1px solid transparent;
  }

  & input:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #fff;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

export const StyledTodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #696969;
  color: #fff;

  & p {
    word-break: break-word;
  }
`

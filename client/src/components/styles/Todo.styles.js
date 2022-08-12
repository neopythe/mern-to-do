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

const br = '0.75rem'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #d2d4d8;
  color: #fff;
  border-top-left-radius: ${br};
  border-bottom-left-radius: ${br};

  & input {
    height: 2rem;
    width: 100%;
    padding: 0 0 0 1rem;
    border: 1px solid transparent;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    color: #1e293b;
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
  color: #fff;
  height: 4rem;
  transition: all 1s;

  ${({ isCompleted }) =>
    isCompleted &&
    `
    background-color: #626977;

    & p {
      text-decoration: line-through;
    }
  `}

  &:only-of-type {
    border-radius: ${br} 0 0 ${br} !important;
  }

  &:first-of-type {
    border-radius: ${br} 0 0 0rem;
  }

  &:last-of-type {
    border-radius: 0 0 0 ${br};
  }

  & p {
    word-break: break-word;
  }
`

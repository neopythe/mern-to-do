import styled from 'styled-components'

export const StyledFieldset = styled.fieldset`
  display: flex;
  gap: 1rem;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;

  & input {
    height: 2rem;
    padding-left: 1rem;
  }
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & button:hover {
    border: 1px solid #aaa;
  }

  & button:disabled {
    cursor: default;
    border: 1px solid transparent;
  }
`

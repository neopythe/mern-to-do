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

  & input:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
  }
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

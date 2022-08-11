import styled from 'styled-components'

export const StyledFieldset = styled.fieldset`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;

  & input {
    height: 2rem;
    width: 100%;
    padding: 0;
    padding-left: 1rem;
    border: 1px solid transparent;
  }

  & input:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

export const StyledInput = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0;
  padding-left: 1rem;
  border: 1px solid transparent;
  color: #1e293b;

  &:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
  }
`

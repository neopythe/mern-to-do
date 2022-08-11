import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 0.8rem;
  height: 2rem;
  width: 100%;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #aaa;
  }

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
  }

  @media only screen and (min-width: 600px) {
    width: fit-content;
  }
`

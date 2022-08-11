import styled from 'styled-components'

export const StyledButton = styled.button`
  &:hover {
    border: 1px solid #aaa;
  }

  &:disabled {
    cursor: default;
    border: 1px solid transparent;
  }

  &:focus {
    outline: none;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
  }
`

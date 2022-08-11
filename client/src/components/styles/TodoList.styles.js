import styled from 'styled-components'

export const StyledTodoList = styled.main`
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 1rem 0 0 1rem;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #696969 #1a1a1a;
`

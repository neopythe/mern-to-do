import styled from 'styled-components'

export const StyledTodoList = styled.main`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  background-color: #fff;
  max-height: 80vh;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 0;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  margin: 0;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #696969 #1a1a1a;
`

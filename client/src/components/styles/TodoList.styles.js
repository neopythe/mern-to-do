import styled from 'styled-components'

export const StyledTodoList = styled.section`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #2b2a33;
  max-height: 80vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #696969 #1a1a1a;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  width: 100%;
`

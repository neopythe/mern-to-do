import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { TodoProvider } from './context/TodoContext'

import NavBar from './components/NavBar'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 4rem;
  text-align: center;
  overflow: hidden;

  @media only screen and (min-width: 600px) {
    & {
      width: 80%;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      width: 60%;
    }
  }
`

export default function App() {
  return (
    <TodoProvider>
      <NavBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route
            path="/todos"
            element={
              <>
                <NewTodoForm />
                <TodoList />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </TodoProvider>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { TodoProvider } from './context/TodoContext'

import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const AppContainer = styled.div`
  max-width: 600px;
  width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 2rem;
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
      <AppContainer>
        <Routes>
          <Route exact path="/" element={<Navigate to="/todos" />} />
          <Route
            exact
            path="/todos"
            element={
              <>
                <NewTodoForm />
                <TodoList />
              </>
            }
          />
        </Routes>
      </AppContainer>
    </TodoProvider>
  )
}

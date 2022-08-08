import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo._id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  )
}

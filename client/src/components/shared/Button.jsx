export default function Button({ children, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
}

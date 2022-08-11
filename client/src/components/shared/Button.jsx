export default function Button({ children, isDisabled, type }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className="btn btn-sm w-full sm:w-fit lowercase"
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
}

export default function Button({ children, isDisabled, type, navigation }) {
  return (
    <button
      style={
        navigation && {
          borderTopLeftRadius: '0.5rem',
          borderBottomLeftRadius: '0.5rem',
          width: 'fit-content',
        }
      }
      type={type}
      disabled={isDisabled}
      className="btn btn-sm w-full sm:w-fit rounded-r-none rounded-bl-lg rounded-tl-none sm:rounded-l-none lowercase"
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
}

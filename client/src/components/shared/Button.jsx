import { StyledButton } from './styles/Button.styles'

export default function Button({ children, isDisabled, type }) {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
}

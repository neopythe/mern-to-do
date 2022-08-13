import { useState } from 'react'

export default function useToggleState(initialValue = false) {
  const [state, setState] = useState(initialValue)

  const toggleState = () => setState(!state)

  return [state, toggleState]
}

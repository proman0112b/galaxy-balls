import { useState } from 'react'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent?: JSX.Element
  headerText?: string
}

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const toggle = () => setIsShown(!isShown)
  return {
    isShown,
    toggle,
  }
}

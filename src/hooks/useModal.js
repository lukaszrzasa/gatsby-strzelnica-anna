import { useState } from 'react'

const useModal = (initialState) => {
  const [ isVisible, setIsVisible ] = useState(initialState);
  //
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);
  const toggle = () => setIsVisible(!isVisible);
  //
  return { isVisible, open, close, toggle };
}

export default useModal;
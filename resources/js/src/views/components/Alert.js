import React from 'react'

// icons
import { BsExclamationCircleFill } from 'react-icons/bs'

export default function Alert({ message, type }) {
  const ErrorMessage = () => <p className="error-message">
    <span><BsExclamationCircleFill/></span>
    {message}
  </p>

  const PopUp = () => null

  switch (type) {
    case 'error':
       return <ErrorMessage />
    
    case 'popup':
       return <PopUp />
  
    default:
      return null
  }
}
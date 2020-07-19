import React, { useState } from 'react'

// Content
import Login from './Login'
import ForgotPassword from './ForgotPassword'

export default function Index() {
  const [content, setContent] = useState(true)

  // Login Card = true and Forgot Password Card is false
  const changeContent = () => setContent(!content)

  return <div className="login-container">
    {content 
      ? <Login changeContent={changeContent}/>
      : <ForgotPassword changeContent={changeContent}/>
    }
  </div>
}
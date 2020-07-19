import React from 'react'

// Components 
import { Logo, Input, Button } from '../../components'

export default function ForgotPassword({ changeContent }) {
  return(
    <div className="card forgot-password">
      <Logo/>
      <h2>Forgot Password</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form>
        <Input
          label="Email"
          placeholder="example@example.com"
        />
        <Button>Reset Password</Button>
        <a 
          onClick={e => {
            e.preventDefault()
            changeContent()
          }}
          href="/vendor/forgot-password">Go back to Login</a>
      </form>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

// Components 
import { Logo, Input, Button, Loading, Alert, CheckBox } from '../../components'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestLogin, saveAccessToken } from '../../../actions/AuthAction'

function Login({
  loginResponse,
  saveAccessToken,
  requestLogin,
  changeContent,
}) {

  const { register : loginInput, handleSubmit, errors } = useForm()

  useEffect(() => {
    Object.entries(loginResponse).length > 0 && processLoginResponse()
  },[loginResponse])

  // States
  const [ loading, setLoading ] = useState(false)
  const [ statusError, setStatusError ] = useState("")
  const [ disabled, setDisabled ] = useState(false)
  const [ rememberMe, setRememberMe ] = useState(false)

  // Input Requirements
  const inputRequirement = {
    email: {
      required: "Email is required"
    },
    password: {
      required: "Password is required"
    },
  }

  function sendLoginData(data) {
    const loginData = {
      email: data.email,
      password: data.password
    }

    setRememberMe(data.rememberMe)    
    sendDataActon()
    requestLogin(loginData)
  }

  function sendDataActon(errorMessage = '') {
    setLoading(!loading)
    setDisabled(!disabled)
    setStatusError(errorMessage)
  }

  function processLoginResponse() {
    const statusCode = loginResponse.status
    const response = loginResponse
    const UNKNOWN_ERROR = 'Please try again'

    switch (statusCode) {
      case 200:
          // OK
          // method to store user access token
          const accessToken = {
            method: rememberMe ? 'LOCAL_STORAGE' : 'SESSION_STORAGE',
            token: response.data.access_token
          }
          saveAccessToken(accessToken)
          
        break;
        
      case 401:
          // Invalid Credentials
          sendDataActon(response.data.message)
        break;
     
      case 422:
          // Invalid Credentials
          sendDataActon(response.data.message)
        break;

      default:
          sendDataActon(UNKNOWN_ERROR)
        break;
    }
  }

  return (
    <div className="card">
      <Logo/>
      <h2>Login</h2>
      <form>
        <Input
          label="Email"
          placeholder="example@example.com"
          handleChange={loginInput(inputRequirement.email)}
          name="email"
          error={errors.email && errors.email.message}
          disabled={disabled}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          handleChange={loginInput(inputRequirement.password)}
          name="password"
          error={errors.password && errors.password.message}
          disabled={disabled}
        />
        { statusError && <Alert 
          message={statusError}
          type="error"
        /> }
        <CheckBox 
          label="Remember Me?"
          handleChange={loginInput}
          name="rememberMe"
          disabled={disabled}
        />
        <Button 
          type="submit"
          action={handleSubmit(sendLoginData)}
          disabled={disabled}
        >
          {loading 
          ? <Loading color="default"/>
          : "Login"}
        </Button>
        <a 
          onClick={e => {
            e.preventDefault()
            changeContent()
          }}
          href="/vendor/forgot-password">Forgot Password?</a>
      </form>
    </div>
  )
}

// Redux
Login.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  loginResponse: PropTypes.any.isRequired,
  saveAccessToken: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  loginResponse: state.auth.loginResponse
})

export default connect(mapStateToProps , { requestLogin, saveAccessToken })(Login)
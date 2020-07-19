import React, { Component } from 'react'

// Components 
import { Logo, Input, Button, Loading, Alert, CheckBox } from '../../components'

// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestLogin, saveAccessToken } from '../../../actions/AuthAction'

class Login extends Component{

  state = {
    email:  "",
    emailError: "",
    password: "",
    passwordError: "",
    rememberMe: false,
    statusError: "",
    loading: false,
  }

  handleChange = (value, name) => {
    this.setState({
      [name]: value
    })
    // validate()
  }

  handleCheckBox = (name) => {
    console.log('changed')
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  validateInputs = name => {
    // Validate Inuput
    if (this.state[name].length === 0 ){
      this.setState({
        [`${name}Error`]: "This field is required"
      })
      return false
    }

    this.setState({
      [`${name}Error`]: ""
    })
    return true
  }

  handleSubmit() {
    if (this.validateInputs('email') && this.validateInputs('password')){
      this.sendDataActon()

      const loginData = {
        email: this.state.email,
        password: this.state.password
      }
      
      // send login data
      this.props.requestLogin(loginData)
    }
  }

  sendDataActon(errorMessage = '') {
    // Show loading
    this.setState({
      loading: !this.state.loading,
      disabled: !this.state.disabled,
      statusError: errorMessage,
    })
  }

  processLoginResponse() {
    const statusCode = this.props.loginResponse.status
    const response = this.props.loginResponse
    const UNKNOWN_ERROR = 'Please try again'

    switch (statusCode) {
      case 200:
          // OK
          // method to store user access token
          const accessToken = {
            method: this.state.rememberMe ? 'LOCAL_STORAGE' : 'SESSION_STORAGE',
            token: response.data.access_token
          }
          this.props.saveAccessToken(accessToken)
          
        break;
        
      case 401:
          // Invalid Credentials
          this.sendDataActon(response.data.message)
        break;
     
      case 422:
          // Invalid Credentials
          this.sendDataActon(response.data.message)
        break;

      default:
        this.sendDataActon(UNKNOWN_ERROR)
        break;
    }
  }

  componentDidUpdate(prevPros) {
    // Recive login respons from redux action
    if (prevPros.loginResponse != this.props.loginResponse){
      this.processLoginResponse()
    }
  }

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      rememberMe,
      statusError,
      disabled,
      loading,
    } = this.state

    return(
      <div className="card">
        <Logo/>
        <h2>Login</h2>
        <form>
          <Input
            label="Email"
            placeholder="example@example.com"
            value={email}
            name="email"
            handleChange={this.handleChange}
            error={emailError}
            disabled={disabled}
          />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            name="password"
            handleChange={this.handleChange}
            error={passwordError}
            disabled={disabled}
          />
          { statusError && <Alert 
            message={statusError}
            type="error"
          /> }
          <CheckBox 
            label="Remember Me?"
            value={rememberMe}
            name="rememberMe"
            handleChange={this.handleCheckBox}
            disabled={disabled}
          />
          <Button 
            action={this.handleSubmit.bind(this)}
            classes={disabled ? 'disabled' : null}
          >
            {loading 
            ? <Loading color="default"/>
            : "Login"}
          </Button>
          <a 
            onClick={e => {
              e.preventDefault()
              this.props.changeContent()
            }}
            href="/vendor/forgot-password">Forgot Password?</a>
        </form>
      </div>
    )
  }
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
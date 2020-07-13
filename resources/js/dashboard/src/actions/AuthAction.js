import { REQUEST_LOGIN } from './types'
import { SAVE_ACCESS_TOKEN } from './types'
import axios from 'axios'

// To request Login
export const requestLogin = loginData => dispatch => {
  axios.post('/api/login',{
    'email': loginData.email,
    'password': loginData.password
  })
  .then(response => 
    dispatch({
      type: REQUEST_LOGIN,
      payload: response
    })
  )
  .catch(error => 
    dispatch({
      type: REQUEST_LOGIN,
      payload: error.response
    })
  )
}

// To save accesss token
export const saveAccessToken = accessToken => dispatch => {
  console.log('SAVED')
  dispatch({
    type: SAVE_ACCESS_TOKEN,
    payload: accessToken
  })
}
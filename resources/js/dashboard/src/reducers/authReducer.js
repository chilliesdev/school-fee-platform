import { REQUEST_LOGIN } from '../actions/types'
import { SAVE_ACCESS_TOKEN } from '../actions/types'

const getAccessToken = () => 
  localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken') || null
  
const initialState = {
  loginResponse: [],
  accessToken: getAccessToken()
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loginResponse: action.payload
      }

    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      }

    default:
      return state
  }
}
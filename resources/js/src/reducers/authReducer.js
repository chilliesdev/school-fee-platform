import { REQUEST_LOGIN, SAVE_ACCESS_TOKEN, REQUEST_LOGOUT } from '../actions/types'

const getAccessToken = () => 
  localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')
  
const initialState = {
  loginResponse: [],
  accessToken: getAccessToken() || "",
  logoutResponse: []
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
    
    case REQUEST_LOGOUT:
      return {
        ...state,
        logoutResponse: action.payload,
        accessToken: ""
      }

    default:
      return state
  }
}
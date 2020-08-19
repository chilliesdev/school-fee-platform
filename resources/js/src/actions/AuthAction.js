import { REQUEST_LOGIN, SAVE_ACCESS_TOKEN, REQUEST_LOGOUT } from "./types"
import axios from "axios"

export const requestLogin = (loginData) => (dispatch) => {
  axios
    .post("/api/login", {
      email: loginData.email,
      password: loginData.password
    })
    .then((response) =>
      dispatch({
        type: REQUEST_LOGIN,
        payload: response
      })
    )
    .catch((error) =>
      dispatch({
        type: REQUEST_LOGIN,
        payload: error.response
      })
    )
}

// To save accesss token
export const saveAccessToken = (accessToken) => (dispatch) => {
  // Set token in local storage or session
  accessToken.method === "LOCAL_STORAGE"
    ? localStorage.setItem("accessToken", accessToken.token)
    : sessionStorage.setItem("accessToken", accessToken.token)

  dispatch({
    type: SAVE_ACCESS_TOKEN,
    payload: accessToken.token
  })
}

export const requestLogout = (accessToken) => (dispatch) => {
  // delete accessToken from local storage an session storage
  localStorage.removeItem("accessToken")
  sessionStorage.removeItem("accessToken")

  axios
    .get("/api/logout", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then((response) => {
      dispatch({
        type: REQUEST_LOGOUT,
        payload: response
      })
    })
    .catch((error) => {
      dispatch({
        type: REQUEST_LOGOUT,
        payload: error.response
      })
    })
}

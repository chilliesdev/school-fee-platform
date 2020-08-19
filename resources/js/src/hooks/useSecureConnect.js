import axios from "axios"

function useSecureConnect() {
  return {
    get: (url, accessToken, params = {}) =>
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: params
      }),

    post: (url, data, accessToken, file = "false") => {
      let headers = {
        Authorization: `Bearer ${accessToken}`
      }

      let formData = data
      if (file) {
        formData = new FormData()

        for (let key in data) {
          formData.append(key, data[key])
        }

        headers = {
          ...headers,
          "content-type": "multipart/form-data"
        }
        // for (let val of formData.values()){
        //   console.table(val)
        // }
      }

      return axios.post(url, formData, {
        headers: headers
      })
    },

    deleteRequest: (url, accessToken) =>
      axios.delete(`/api${url}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
  }
}

export default useSecureConnect

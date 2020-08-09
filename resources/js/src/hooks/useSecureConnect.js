import axios from 'axios'


function useSecureConnect() {
  return {
    get: (url, accessToken) => 
      axios.get(`/api${url}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }),
    post: null
  }
}

export default useSecureConnect
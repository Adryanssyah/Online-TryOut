import axios from 'axios'
const requestWithBearer = async (url, method, params) => {
  let finalResponse = {}
  if (localStorage.getItem('tryoutkuToken') === null) {
    this.$router.push({ name: 'Login' })
  } else {
    await axios
      .request({
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tryoutkuToken').split('|')[1]}`
        },
        method: method,
        url: url,
        params: params
      })
      .then((response) => {
        finalResponse = {
          success: true,
          data: response
        }
      })
      .catch((error) => {
        finalResponse = {
          success: false,
          error: error
        }
      })
  }
  return finalResponse
}

export default requestWithBearer

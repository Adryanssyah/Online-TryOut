import axios from 'axios'
const postRequest = async (url, param) => {
  try {
    const response = await axios.post(url, param)
    return response
  } catch (error) {
    return error
  }
}

export default postRequest

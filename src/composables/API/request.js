import axios from 'axios'
const getRequest = async (param) => {
  try {
    const response = await axios.post('login', param)
    return response
  } catch (error) {
    return error
  }
}

export default getRequest

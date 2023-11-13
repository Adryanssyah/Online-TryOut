import axios from 'axios'
const getRequest = async (url) => {
  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    return error
  }
}

export default getRequest

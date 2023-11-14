import axios from 'axios'
import { useUserStore } from '@/stores/User'

const requestWithBearer = async (url, method, params) => {
  const userStore = useUserStore()
  let finalResponse = {}
  if (localStorage.getItem('tryoutkuToken') === null) {
    userStore.$reset()
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
          data: response.data
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

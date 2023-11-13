import { useUserStore } from '@/stores/User'
import axios from 'axios'

const storedToken = localStorage.getItem('tryoutkuToken')

const sessionCheck = () => {
  const check = async () => {
    try {
      if (storedToken !== null) {
        const response = await axios.post('check-token', { token_id: storedToken.split('|')[0] })
        const userStore = useUserStore()
        if (response.data.message) {
          userStore.isAuthenticated = true
          userStore.user = response.data.user
        } else {
          userStore.$reset()
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { check }
}

export default sessionCheck

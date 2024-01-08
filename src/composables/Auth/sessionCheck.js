import { useUserStore } from '@/stores/User'
import axios from 'axios'

const sessionCheck = () => {
  const storedToken = localStorage.getItem('tryoutkuToken')
  const userStore = useUserStore()

  const check = async () => {
    try {
      if (storedToken !== null) {
        const response = await axios.post('check-token', { token_id: storedToken.split('|')[0] })

        if (response.data.message) {
          userStore.isAuthenticated = true
          userStore.user = response.data.user
          userStore.user.session_token = storedToken
        } else {
          userStore.$reset()
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      userStore.initialized = true
    }
  }

  return { check }
}

export default sessionCheck

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    initialized: false,
    isAuthenticated: false,
    user: null
  })
})

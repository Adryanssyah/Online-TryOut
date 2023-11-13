import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isAuthenticated: false,
    user: null
  }),

  getters: {}
})

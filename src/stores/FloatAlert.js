import { defineStore } from 'pinia'

export const useFloatAlertStore = defineStore({
  id: 'FloatAlert',
  state: () => ({
    show: false,
    message: '',
    type: ''
  }),
  actions: {
    showFloatAlert(message, type) {
      this.show = true
      this.message = message
      this.type = type
      setTimeout(() => {
        this.show = false
      }, 2500)
    }
  }
})

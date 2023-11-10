import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useCountdownTimer(endTime) {
  const timeRemaining = ref(calculateTimeRemaining())
  const isExpired = ref(false)

  function calculateTimeRemaining() {
    const now = new Date()
    const endTimeDate = new Date(endTime)
    const timeDifference = endTimeDate - now

    if (timeDifference <= 0) {
      // isExpired.value = true
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      isExpired.value = true
    }

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  const interval = setInterval(() => {
    timeRemaining.value = calculateTimeRemaining()

    if (isExpired.value) {
      clearInterval(interval)
    }
  }, 1000)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })

  return {
    timeRemaining,
    isExpired
  }
}

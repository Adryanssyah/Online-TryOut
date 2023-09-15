export function useScrollToTop() {
  function scrollToTop() {
    const duration = 500
    const easing = (t) => t * t

    const start = window.pageYOffset
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

    function animateScroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime()
      const time = Math.min(1, (now - startTime) / duration)
      const timeFunction = easing(time)

      window.scroll(0, Math.ceil(timeFunction * (0 - start) + start))

      if (time < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    animateScroll()
  }

  return { scrollToTop }
}

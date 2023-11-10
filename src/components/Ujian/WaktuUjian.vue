<template lang="">
  <div class="fixed top-0 w-full flex justify-center">
    <div
      :class="{ 'opacity-50': transparent, 'opacity-100': !transparent }"
      class="px-4 py-2 border-2 rounded-lg font-semibold my-2 bg-white"
    >
      00:56:32
    </div>
  </div>
</template>
<script>
export default {
  name: 'waktu',
  data() {
    return {
      transparent: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      window.scrollY > 0 ? (this.transparent = true) : (this.transparent = false)
    }
  }
}
</script>
<style lang=""></style>

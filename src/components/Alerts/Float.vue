<template lang="">
  <transition
    enter-active-class="transition-all ease-in-out duration-300"
    leave-active-class="transition-all ease-in-out duration-300"
    enter-from-class="transform  translate-y-24 opacity-0"
    leave-to-class="transform  translate-y-24 opacity-0"
  >
    <div
      v-if="floatAlert.visible"
      :class="{
        'text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800':
          floatAlert.type === 'berhasil',
        'text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:border-red-800':
          floatAlert.type === 'gagal'
      }"
      class="flex fixed bottom-8 z-50 left-1/2 items-center p-4 mb-4 text-sm border rounded-lg dark:bg-gray-800"
      role="alert"
      style="transform: translate(-50%, -50%)"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium capitalize">{{ floatAlert.type }}</span> {{ floatAlert.message }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    floatAlert: Object
  },
  data() {
    return {
      duration: 1500
    }
  },
  watch: {
    'floatAlert.visible': function (newVal, oldVal) {
      if (newVal === true) {
        setTimeout(() => {
          this.$emit('toggleAlert', {
            type: this.floatAlert.type,
            message: this.floatAlert.message
          })
        }, this.duration)
      }
    }
  }
}
</script>
<style lang=""></style>

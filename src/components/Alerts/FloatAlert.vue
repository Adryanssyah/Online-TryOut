<template lang="">
  <transition
    enter-active-class="transition-all ease-in-out duration-300"
    leave-active-class="transition-all ease-in-out duration-300"
    enter-from-class="transform  translate-y-24 opacity-0"
    leave-to-class="transform  translate-y-24 opacity-0"
  >
    <div
      v-if="floatAlertStore.show"
      :class="{
        'text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800':
          floatAlertStore.type === 'success',
        'text-yellow-800 border-yellow-300 bg-yellow-50 dark:text-yellow-400 dark:border-yellow-800':
          floatAlertStore.type === 'warning',
        'text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:border-red-800':
          floatAlertStore.type === 'error'
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
        <!-- <span class="font-medium capitalize">{{ floatAlertStore.type }}!</span> -->
        {{ floatAlertStore.message }}
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue'
import { useFloatAlertStore } from '@/stores/FloatAlert'
export default {
  setup() {
    const floatAlertStore = useFloatAlertStore()

    // Gunakan computed properties untuk memantau perubahan pada store
    const showAlertMessage = computed(() => floatAlertStore.message)
    const showAlertType = computed(() => floatAlertStore.type)

    return {
      floatAlertStore,
      showAlertMessage,
      showAlertType
    }
  }
}
</script>

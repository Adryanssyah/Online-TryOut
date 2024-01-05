<template>
  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
  >
    <div
      v-if="modalShow"
      class="fixed top-0 left-0 w-full min-h-full z-50 flex justify-center items-center max-h-screen py-20"
    >
      <div
        @click="closeModal"
        class="absolute top-0 left-0 w-full min-h-full backdrop-blur-sm bg-gray-500 blur-sm bg-opacity-50"
      ></div>
      <div class="max-h-screen overflow-y-auto w-full flex justify-center py-10">
        <div
          :class="{
            'lg:max-w-sm': size === 'extraSmall',
            'lg:max-w-lg': size === 'small',
            'lg:max-w-4xl': size === 'large',
            'lg:max-w-7xl': size === 'extraLarge'
          }"
          class="bg-white relative p-5 rounded-xl z-50 mx-2 w-full max-w-full h-full"
        >
          <div class="flex justify-between mb-10 px-2">
            <h2 class="text-lg">{{ title }}</h2>
            <button @click="closeModal" class="px-2 py-1 rounded-lg hover:bg-gray-100">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  emits: ['close'],
  watch: {
    modalShow(newValue) {
      newValue
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

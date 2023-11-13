<template lang="">
  <div>
    <label :for="id" v-if="label" class="block text-sm font-medium leading-6 text-gray-900">{{
      label
    }}</label>
    <div class="mt-2 relative">
      <input
        :id="id"
        class="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
        :class="{ 'ring-red-500 border-red-500': error }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="hide ? 'password' : 'text'"
        v-bind="$attrs"
      />
      <svg
        class="w-4 h-4 text-gray-800 dark:text-white absolute right-3 top-3 cursor-pointer hover:opacity-60"
        @click="togglePassword"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 14"
      >
        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
        </g>
      </svg>
    </div>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String
    },
    label: {
      type: [String, Boolean],
      default: false
    },
    error: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hide: true
    }
  },
  methods: {
    togglePassword() {
      this.hide = !this.hide
    }
  }
}
</script>

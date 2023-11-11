<template lang="">
  <input
    id="password"
    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
    autocomplete="current-password"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="hide ? 'password' : 'text'"
    v-bind="$attrs"
  />
  <svg
    class="w-4 h-4 text-gray-800 dark:text-white absolute right-3 top-2 cursor-pointer hover:opacity-60"
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
</template>
<script>
export default {
  props: {
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

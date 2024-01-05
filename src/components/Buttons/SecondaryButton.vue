<template>
  <button
    :type="type"
    @click="$emit('click')"
    :class="{
      'text-xs': size === 'extraSmall',
      'text-sm': size === 'small',
      'text-base': size === 'base',
      'text-lg': size === 'large',
      'text-xl': size === 'extraLarge'
    }"
    class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'text-base'
    }
  },
  emits: ['click']
}
</script>

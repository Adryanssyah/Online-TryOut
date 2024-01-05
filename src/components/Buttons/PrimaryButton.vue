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
    class="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
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
      default: 'base'
    }
  },
  emits: ['click']
}
</script>

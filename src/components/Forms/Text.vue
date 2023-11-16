<template lang="">
  <div>
    <label
      :for="id"
      v-if="label"
      class="block text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2">
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
        :class="{ 'ring-red-500 border-red-500': error }"
      />
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
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<style lang=""></style>

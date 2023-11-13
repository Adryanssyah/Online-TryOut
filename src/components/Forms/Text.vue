<template lang="">
  <div>
    <label :for="id" v-if="label" class="block text-sm font-medium leading-6 text-gray-900">{{
      label
    }}</label>
    <div class="mt-2">
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
        :class="{ 'ring-red-500': error }"
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
      type: String,
      default: ''
    }
  }
}
</script>
<style lang=""></style>

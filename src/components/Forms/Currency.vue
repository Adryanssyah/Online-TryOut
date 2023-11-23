<template>
  <div class="w-full">
    <label
      :for="id"
      v-if="label"
      class="block text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2">
      <input
        :id="id"
        class="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
        :class="{ 'ring-red-500 border-red-500': error }"
        v-bind="$attrs"
        ref="inputRef"
        type="text"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  inheritAttrs: false,
  props: {
    modelValue: Number,
    options: Object,
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
    }
  },
  setup() {
    const { inputRef } = useCurrencyInput({
      currency: 'IDR',
      hideCurrencySymbolOnFocus: false,
      hideGroupingSeparatorOnFocus: false,
      precision: 0,
      valueRange: { min: 0 }
    })

    return { inputRef }
  }
}
</script>

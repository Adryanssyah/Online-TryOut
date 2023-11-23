<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <label
        :for="value"
        :class="{ 'border-2 border-yellow-500': isChecked, 'ring-red-500 border-red-500': error }"
        class="px-5 py-2.5 rounded-lg border text-sm mt-2 cursor-pointer"
      >
        <i class="bi bi-check-lg text-yellow-400 mr-2" :class="{ hidden: !isChecked }"></i>
        <span class="capitalize">{{ value }}</span>
        <input
          class="hidden"
          type="radio"
          v-bind="$attrs"
          :id="value"
          :checked="isChecked"
          :value="value"
          @change="$emit('update:modelValue', $event.target.value)"
        />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: true,
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { default: '' },
    error: {
      type: [String, Boolean],
      default: false
    },
    value: { type: String, default: undefined }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  }
}
</script>

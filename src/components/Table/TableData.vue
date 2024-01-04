<template lang="">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3" v-for="(item, index) in head" :key="index">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
  <div v-if="isEmpty" class="w-full text-center text-sm font-medium py-4">
    {{ title }} tidak ditemukan!
  </div>
</template>
<script>
export default {
  name: 'TableData',
  props: {
    head: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Data'
    },
    isEmpty: {
      type: Boolean,
      default: true
    }
  }
}
</script>

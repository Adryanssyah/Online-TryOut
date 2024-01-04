<template>
  <tr
    :class="{
      'border-b border-gray-200 dark:border-gray-700': !lastRow
    }"
  >
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
    >
      {{ title }}
    </th>
    <td class="px-6 py-4">
      <slot></slot>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'Detail Table Row',
  props: {
    title: {
      type: String
    },
    lastRow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template lang="">
  <div
    class="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-5"
  >
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Paket {{ plan.title }}
    </h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-3xl font-semibold">Rp.</span>
      <span class="text-4xl lg:text-5xl font-extrabold tracking-tight">{{
        formatPrice(plan.harga)
      }}</span>
      <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/bulan</span>
    </div>
    <ul role="list" class="space-y-5 my-7">
      <li class="flex space-x-3 items-center">
        <svg
          class="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >2 team members</span
        >
      </li>
      <li class="flex space-x-3">
        <svg
          class="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >20GB Cloud storage</span
        >
      </li>
      <li class="flex space-x-3">
        <svg
          class="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >Integration help</span
        >
      </li>
      <li class="flex space-x-3 line-through decoration-gray-500">
        <svg
          class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
      </li>
      <li class="flex space-x-3 line-through decoration-gray-500">
        <svg
          class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
      </li>
      <li class="flex space-x-3 line-through decoration-gray-500">
        <svg
          class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500"
          >Complete documentation</span
        >
      </li>
      <li class="flex space-x-3 line-through decoration-gray-500">
        <svg
          class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500"
          >24×7 phone & email support</span
        >
      </li>
    </ul>
    <button
      type="button"
      class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Pilih Paket
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    plan: {
      required: true
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
<style lang=""></style>

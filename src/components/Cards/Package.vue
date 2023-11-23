<template>
  <div
    class="p-4 bg-white border border-gray-200 rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="flex flex-col items-baseline text-gray-900 dark:text-white">
      <span class="text-xl font-semibold">Paket </span>
      <span class="text-3xl lg:text-4xl font-extrabold tracking-tight">{{
        package.package_name
      }}</span>
    </h5>
    <ul role="list" class="space-y-5 my-7">
      <li class="flex space-x-3 items-center">
        <div class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Rp
          <span class="font-semibold text-lg text-yellow-400">{{
            formatPrice(package.price)
          }}</span>
        </div>
      </li>
    </ul>
    <button
      type="button"
      class="flex w-full items-center gap-2 justify-center flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      Edit
    </button>
  </div>
</template>
<script>
export default {
  props: { package: Object },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<template lang="">
  <div
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-sticky"
  >
    <ul
      class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-custom-dark md:dark:custom-dark dark:border-gray-700"
    >
      <li>
        <router-link
          :to="{ name: 'Dashboard' }"
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          exact-active-class="text-white bg-yellow-500 md:text-yellow-500 md:dark:text-yellow-500 md:bg-transparent"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'PacketList' }"
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          exact-active-class="text-white bg-yellow-500 md:text-yellow-500 md:dark:text-yellow-500 md:bg-transparent"
          >Beli Paket</router-link
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          exact-active-class="text-white bg-yellow-500 md:text-yellow-500 md:dark:text-yellow-500 md:bg-transparent"
          >Bantuan</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
<style></style>

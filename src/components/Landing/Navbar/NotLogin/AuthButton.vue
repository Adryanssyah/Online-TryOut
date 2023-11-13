<template lang="">
  <router-link
    :to="{ name: 'Login' }"
    class="font-medium text-sm px-4 py-2 text-center mr-2 md:mr-0 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    Login
  </router-link>
  <router-link
    :to="{ name: 'Regis' }"
    class="text-white hidden md:block bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
  >
    Daftar
  </router-link>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
<script>
export default {
  name: 'AuthButton'
}
</script>
<style lang=""></style>

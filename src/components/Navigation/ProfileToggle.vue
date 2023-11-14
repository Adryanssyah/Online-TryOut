<template lang="">
  <div class="flex items-center">
    <button
      type="button"
      class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span class="sr-only">Open user menu</span>
      <div class="w-8 h-8 rounded-full text-white flex justify-center items-center">AS</div>
    </button>
    <div
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">Adryan Syahputra</span>
        <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
          >name@flowbite.com</span
        >
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <router-link
            :to="{ name: 'Profile' }"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Profil Saya</router-link
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Try Out Saya</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Bantuan</a
          >
        </li>
        <li>
          <div
            @click="logout"
            class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Keluar
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

<script>
import axios from 'axios'
import { useUserStore } from '@/stores/User'
export default {
  data() {
    return {}
  },
  methods: {
    async logout() {
      const userStore = useUserStore()
      await axios
        .request({
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tryoutkuToken').split('|')[1]}`
          },
          method: 'POST',
          url: `logout`
        })
        .then((response) => {
          if (response.data.success) {
            userStore.$reset()
            this.$router.push({ name: 'Login' })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

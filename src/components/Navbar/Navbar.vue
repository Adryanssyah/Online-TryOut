<template lang="">
  <nav
    class="bg-white dark:bg-custom-dark fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link :to="{ name: 'landingPage' }" class="flex items-center">
        <img src="/icon.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >ToLine</span
        >
      </router-link>
      <div class="flex gap-3 md:order-2">
        <AuthButton v-if="!isLogin" />
        <Notifications v-if="isLogin" />
        <ProfileToggle v-if="isLogin" />
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <Menu />
    </div>
    <section class="bg-gray-50 dark:bg-gray-700">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

<script>
import AuthButton from './NotLogin/AuthButton.vue'
import ProfileToggle from './Login/ProfileToggle.vue'
import Notifications from './Login/Notifications.vue'
import Menu from './Menu.vue'
export default {
  components: {
    AuthButton,
    ProfileToggle,
    Notifications,
    Menu
  },
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.meta.auth) {
        this.isLogin = true
        return
      }
      this.isLogin = false
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  }
}
</script>
<style lang=""></style>

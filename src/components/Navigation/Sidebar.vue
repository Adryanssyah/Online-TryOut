<template lang="">
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="(menu, index) in menus" :key="index">
          <router-link
            :to="{ name: menu.link }"
            exact-active-class="bg-yellow-500 text-white hover:bg-yellow-800"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <i :class="menu.icon"></i>
            <span class="ms-3">{{ menu.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useUserStore } from '@/stores/User'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})

const adminMenus = [
  { icon: 'bi bi-bar-chart-fill', name: 'Dashboard', link: 'Dashboard' },
  { icon: 'bi bi-folder-plus', name: 'Tipe Paket', link: 'AddPackageType' }
]
const participanMenus = [
  { icon: 'bi bi-bar-chart-fill', name: 'Dashboard', link: 'Dashboard' },
  { icon: 'bi bi-pc-display-horizontal', name: 'Try Out', link: 'Exam' }
]

const userStore = useUserStore()

let menus = []
if (userStore.user) userStore.user.level_id === 1 ? (menus = adminMenus) : (menus = participanMenus)
</script>

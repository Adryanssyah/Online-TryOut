<template lang="">
  <DashboardAdmin v-if="user === 'admin'" />
  <DashboardUser v-if="user === 'examine'" />
</template>
<script>
import Navbar from '@/components/Navigation/Navbar.vue'
import Sidebar from '@/components/Navigation/Sidebar.vue'
import Footer from '@/components/Navigation/Footer.vue'
import DashboardAdmin from '@/components/Dashboard/Admin.vue'
import DashboardUser from '@/components/Dashboard/User.vue'
import { useUserStore } from '@/stores/User'
export default {
  components: { Navbar, Sidebar, Footer, DashboardAdmin, DashboardUser },
  name: 'Dashboard',
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const userStore = await useUserStore()
    userStore.user.level_id === 1 ? (this.user = 'admin') : (this.user = 'examine')
  }
}
</script>

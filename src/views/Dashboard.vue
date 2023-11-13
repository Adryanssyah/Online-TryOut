<template lang="">
  <DashboardAdmin />
</template>
<script>
import Navbar from '@/components/Navigation/Navbar.vue'
import Sidebar from '@/components/Navigation/Sidebar.vue'
import Footer from '@/components/Navigation/Footer.vue'
import DashboardAdmin from '@/components/Dashboard/Admin.vue'
import DashboardUser from '@/components/Dashboard/User.vue'
export default {
  components: { Navbar, Sidebar, Footer, DashboardAdmin, DashboardUser },
  name: 'Dashboard'
}
</script>

<template lang="">
  <div v-if="!checkRoute">
    <Navbar />
    <Sidebar />
    <div class="p-4 sm:ml-64 mt-16 flex flex-col gap-10 justify-between min-h-screen">
      <main>
        <BreadCrumb />
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
  <div v-if="checkRoute">
    <router-view />
  </div>

  <FloatAlert />
</template>

<script>
import BreadCrumb from '@/components/Navigation/BreadCrumb.vue'
import Navbar from '@/components/Navigation/Navbar.vue'
import Sidebar from '@/components/Navigation/Sidebar.vue'
import Footer from '@/components/Navigation/Footer.vue'

import FloatAlert from '@/components/Alerts/FloatAlert.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    Footer,
    BreadCrumb,
    FloatAlert
  },
  computed: {
    checkRoute() {
      return (
        this.$route.name === 'landingPage' ||
        this.$route.name === 'Login' ||
        this.$route.name === 'Regis' ||
        this.$route.name === 'Exam'
      )
    }
  },
  data() {
    return {
      authPage: false
    }
  }
}
</script>

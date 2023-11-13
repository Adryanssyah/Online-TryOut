<template lang="">
  <div v-if="!checkRoute">
    <Navbar />
    <Sidebar />
    <div class="p-4 sm:ml-64 mt-16 flex flex-col gap-10 justify-between min-h-screen">
      <div class="font-poppins">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
  <div v-if="checkRoute" class="font-poppins">
    <router-view @toggleAlert="toggleAlert" />
  </div>
  <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
</template>
<script>
import Navbar from '@/components/Navigation/Navbar.vue'
import Sidebar from '@/components/Navigation/Sidebar.vue'
import Footer from '@/components/Navigation/Footer.vue'
import floatAlert from '@/components/Alerts/Float.vue'
export default {
  name: 'app',
  components: {
    floatAlert,
    Navbar,
    Sidebar,
    Footer
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
      authPage: false,
      floatAlert: {
        visible: false,
        message: '',
        type: ''
      }
    }
  },
  methods: {
    toggleAlert({ type, message }) {
      this.floatAlert.visible = !this.floatAlert.visible
      this.floatAlert.message = message
      this.floatAlert.type = type
    }
  }
}
</script>

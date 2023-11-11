<template lang="">
  <Navbar v-if="!authPage" />
  <div class="font-poppins" :class="{ 'mt-[111px]': !authPage }">
    <router-view @toggleAlert="toggleAlert" />
  </div>
  <Footer v-if="!authPage" />

  <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import floatAlert from '@/components/Alerts/Float.vue'
import Footer from '@/components/Footer.vue'
import landingPage from '@/views/LandingPage.vue'
export default {
  name: 'app',

  components: {
    floatAlert,
    Navbar,
    Footer,
    landingPage
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
    checkRoute() {
      if (this.$route.meta.authPage || this.$route.name === 'Exam') {
        this.authPage = true
        return
      }
      this.authPage = false
    },
    toggleAlert({ type, message }) {
      this.floatAlert.visible = !this.floatAlert.visible
      this.floatAlert.message = message
      this.floatAlert.type = type
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  }
}
</script>

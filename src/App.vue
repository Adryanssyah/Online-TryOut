<template lang="">
  <Navbar v-if="!authPage" />
  <div class="font-poppins" :class="{ 'mt-[71px]': !authPage }"><router-view /></div>
  <Footer v-if="!authPage" />
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer.vue'
import landingPage from './views/LandingPage.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    landingPage
  },
  data() {
    return {
      authPage: false
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.name === 'Login' || this.$route.name === 'Regis') {
        this.authPage = true
        return
      }

      this.authPage = false
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  }
}
</script>

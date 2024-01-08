<template>
  <MainLoader :visible="loading"> </MainLoader>
  <div v-if="!loading">
    <div v-if="!checkRoute && !loading">
      <Navbar />
      <Sidebar />
      <div class="p-4 sm:ml-64 mt-16 flex flex-col gap-10 justify-between min-h-screen">
        <main>
          <BreadCrumb />
          <router-view />
        </main>
        <FooterBar />
      </div>
    </div>
    <div v-if="checkRoute && !loading">
      <router-view />
    </div>

    <FloatAlert />
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import BreadCrumb from '@/components/Navigation/BreadCrumb.vue'
import Navbar from '@/components/Navigation/Navbar.vue'
import Sidebar from '@/components/Navigation/Sidebar.vue'
import FooterBar from '@/components/Navigation/Footer.vue'
import MainLoader from '@/components/Loader/MainLoader.vue'
import FloatAlert from '@/components/Alerts/FloatAlert.vue'
import { useUserStore } from '@/stores/User'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    FooterBar,
    BreadCrumb,
    FloatAlert,
    MainLoader
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
      initialLoading: true
    }
  },
  setup() {
    const userStore = useUserStore()
    const loading = ref(true)

    const initialized = computed(() => userStore.initialized)

    watch(initialized, (newValue) => {
      if (newValue) {
        loading.value = false
      }
    })

    return {
      loading
    }
  }
}
</script>

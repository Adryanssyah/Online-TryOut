<template lang="">
  <div
    class="min-h-screen bg-center bg-no-repeat bg-[url('https://img.freepik.com/premium-vector/mathematical-algebra-formulas-doodle-equation-graphics-signs-math-geometry-physics-formulas-equations-vector-illustration-set-science-calculation-symbols_229548-2362.jpg')] bg-gray-50 bg-blend-overlay bg-cover"
  >
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="flex justify-center">
          <router-link :to="{ name: 'landingPage' }" class=""
            ><img class="h-10 w-auto" src="/icon.svg" alt="ToLine"
          /></router-link>
        </div>

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Masuk ke akunmu
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="Login">
          <textInput
            :label="'Email'"
            :id="'email'"
            v-model="loginData.email"
            type="email"
            :error="errors.email ? errors.email[0] : ''"
          />

          <passwordInput
            v-model="loginData.password"
            name="password"
            :label="'Password'"
            :id="'id'"
            :error="errors.password ? errors.password[0] : ''"
          />

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              :class="{ 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50': isLoading }"
              class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              {{ isLoading ? 'Loading...' : 'Masuk' }}
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Belum mendaftar?
          <router-link
            :to="{ name: 'Regis' }"
            class="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"
            >daftar sekarang</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import postRequest from '@/composables/API/POST'
import textInput from '@/components/Forms/Text.vue'
import passwordInput from '@/components/Forms/Password.vue'
import { useUserStore } from '@/stores/User'
export default {
  name: 'Login',
  components: {
    passwordInput,
    textInput
  },
  data() {
    return {
      isLoading: false,
      loginData: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async Login() {
      this.isLoading = true
      this.errors = {}
      const response = await postRequest('login', this.loginData)
      console.log(response.data)
      if (response.code === 'ERR_NETWORK') {
        this.$emit('toggleAlert', { type: 'gagal', message: 'Maaf sedang terjadi gangguan!' })
      } else if (response.data.errors || !response.data.success) {
        this.errors = response.data.errors
      } else {
        await this.updateStore(response.data.data)
        this.storeTokenToLocalStorage(response.data.data.session_token)
        this.$router.push({ name: 'Dashboard' })
      }
      this.isLoading = false
    },

    async updateStore(userData) {
      const userStore = useUserStore()
      userStore.isAuthenticated = true
      userStore.user = userData
    },

    storeTokenToLocalStorage(token) {
      localStorage.setItem('tryoutkuToken', token)
    }
  },

  watch: {
    'errors.password': function (newValue, oldValue) {
      this.loginData.password = ''
    }
  }
}
</script>

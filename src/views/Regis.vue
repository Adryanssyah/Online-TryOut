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
          Buat akunmu sekarang
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="regis">
          <textInput
            :label="'Email'"
            :id="'email'"
            v-model="dataRegis.email"
            type="email"
            :error="errors.email ? errors.email[0] : ''"
          />
          <textInput
            :label="'Username'"
            :id="'username'"
            v-model="dataRegis.username"
            type="text"
            :error="errors.username ? errors.username[0] : ''"
          />
          <passwordInput
            :label="'Password'"
            :id="'password'"
            v-model="dataRegis.password"
            :error="errors.password ? errors.password[0] : ''"
          />
          <passwordInput
            :label="'Konfirmasi Password'"
            :id="'konfirmasi-password'"
            v-model="konfirmasiPassword"
            :error="errors.konfirmasiPassword ? errors.konfirmasiPassword : ''"
          />
          <textInput
            :label="'First Name'"
            :id="'firstname'"
            v-model="dataRegis.firstname"
            type="text"
            :error="errors.firstname ? errors.firstname[0] : ''"
          />
          <textInput
            :label="'Last Name'"
            :id="'lastname'"
            v-model="dataRegis.lastname"
            :error="errors.lastname ? errors.lastname[0] : ''"
            type="text"
          />
          <textInput
            :label="'Nomor Handphone'"
            :id="'nohp'"
            v-model="dataRegis.no_hp"
            type="tel"
            :error="errors.no_hp ? errors.no_hp[0] : ''"
          />

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              :class="{ 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50': isLoading }"
              class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              {{ isLoading ? 'Loading...' : 'Buat Akun' }}
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Sudah punya akun?
          <router-link
            :to="{ name: 'Login' }"
            class="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"
            >masuk sekarang</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import textInput from '@/components/Forms/Text.vue'
import passwordInput from '@/components/Forms/Password.vue'
import postRequest from '@/composables/API/POST'
export default {
  name: 'Regis',
  components: {
    textInput,
    passwordInput
  },
  data() {
    return {
      isLoading: false,
      dataRegis: {
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        no_hp: ''
      },
      errors: {},
      konfirmasiPassword: ''
    }
  },
  methods: {
    async regis() {
      this.isLoading = true
      this.errors = {}
      const response = await postRequest('registration', this.dataRegis)
      if (response.code === 'ERR_NETWORK') {
        this.isLoading = false
        this.$emit('toggleAlert', { type: 'gagal', message: 'Maaf sedang terjadi gangguan!' })
      } else if (response.data.errors) {
        this.isLoading = false
        this.errors = response.data.errors
      } else {
        this.isLoading = false
        this.$emit('toggleAlert', { type: 'berhasil', message: 'Sukses Silahkan lakukan login!' })
        this.$router.push({ name: 'Login' })
      }
    }
  },

  watch: {
    konfirmasiPassword(newValue, oldValue) {
      newValue != this.dataRegis.password
        ? (this.errors.konfirmasiPassword = 'Password harus sama')
        : delete this.errors.konfirmasiPassword
    }
  }
}
</script>
<style lang=""></style>

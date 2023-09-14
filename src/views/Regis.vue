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
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Nama</label
            >
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Alamat email</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >Nomor Handphone</label
              >
            </div>
            <div class="mt-2">
              <input
                id="handphone"
                name="password"
                type="tel"
                inputmode="numeric"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Buat Akun
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
export default {
  name: 'Regis'
}
</script>
<style lang=""></style>

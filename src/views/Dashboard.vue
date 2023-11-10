<template lang="">
  <main class="bg-white dark:bg-custom-dark">
    <div class="px-4 mx-auto max-w-screen-xl py-2">
      <div class="rounded-lg overflow-hidden h-auto object-fit"><Carousel /></div>
      <div class="grid md:grid-cols-12 gap-5 my-5">
        <section class="md:col-span-9">
          <h1 class="font-bold text-4xl my-5">
            Selamat Siang,
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-orange-400"
              >Adryan</span
            >!
          </h1>
          <div
            class="bg-white rounded-lg px-5 py-4 shadow w-full flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between"
          >
            <div class="w-full py-10 md:py-0 flex flex-col items-center justify-start">
              <p class="text-gray-500 text-sm">Saldo Saya</p>
              <h2 class="text-yellow-500 text-center my-5">
                Rp. <span class="text-5xl font-bold">20.000,-</span>
              </h2>
              <a
                class="text-center whitespace-nowrap mt-2 px-5 py-2 border rounded-lg border-yellow-300 text-white font-semibold bg-yellow-400 text-sm hover:bg-yellow-500 outline focus:outline-yellow-300"
                href="#"
                >Isi Saldo sekarang ⇀</a
              >
            </div>
            <div
              class="w-full py-10 md:py-0 flex flex-col items-center justify-start border-t md:border-t-0 md:border-l"
            >
              <p class="text-gray-500 text-sm">Paket Try Out Saya</p>
              <router-link :to="{ name: 'Exam' }"
                ><h2 class="text-center flex items-center gap-3 font-bold text-5xl my-5">
                  2 <span class="text-lg text-yellow-400">〉</span>
                </h2></router-link
              >
            </div>
          </div>
        </section>
        <section class="md:col-span-3">
          <div class="bg-white rounded-lg px-5 py-3 sticky top-20 shadow">
            <h2 class="font-semibold text-lg mb-3">Pengumuman</h2>
            <div class="py-2 border-b">
              <h3 class="text-sm text-gray-400">
                <strong class="text-black">Admin</strong> - 1 hari yang lalu
              </h3>
              <h4 class="font-semibold text-yellow-500 mt-1">Perubahan harga paket SKD</h4>
              <p class="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum eum iste natus
                quasi delectus perspiciatis quod enim id pariatur, aliquam suscipit? Voluptates
                recusandae quos, eaque impedit voluptate temporibus dolorum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    Carousel
  },
  name: 'Dashboard'
}
</script>
<style lang=""></style>

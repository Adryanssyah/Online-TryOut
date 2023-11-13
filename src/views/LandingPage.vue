<template lang="">
  <div class="pt-[71px]">
    <Navbar />
    <Jumbotron></Jumbotron>
    <Promo1></Promo1>
    <div class="py-6 px-4 mx-auto max-w-screen-xl">
      <h2
        class="mb-6 lg:mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
      >
        Paket
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-orange-400"
          >Try Out</span
        >
      </h2>

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
      </div>
      <div class="text-center py-5">
        <router-link
          class="font-medium text-sm px-4 py-2 text-center mr-2 md:mr-0 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          :to="{ name: 'PacketList' }"
          >Lihat Semua Paket</router-link
        >
      </div>
    </div>
    <Accordion />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Landing/Navbar/Navbar.vue'
import Jumbotron from '@/components/Landing/Jumbotron.vue'
import PricingCard from '@/components/Landing/PricingCard.vue'
import Promo1 from '@/components/Landing/Promo1.vue'
import Accordion from '@/components/Landing/Accordion.vue'
import Footer from '@/components/Navigation/Footer.vue'
export default {
  name: 'landingPage',
  components: {
    Navbar,
    Jumbotron,
    PricingCard,
    Promo1,
    Accordion,
    Footer
  },
  data() {
    return {
      plans: [
        { title: 'CPNS 2023', harga: 30000 },
        { title: 'BUMN 2023', harga: 45000 },
        { title: 'BUMN 2023', harga: 45000 },
        { title: 'SNBT 2024', harga: 120000 }
      ]
    }
  }
}
</script>

<template lang="">
  <div>
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
    </div>

    <Accordion />
  </div>
</template>
<script>
import Jumbotron from '../components/landingPage/Jumbotron.vue'
import PricingCard from '../components/landingPage/PricingCard.vue'
import Promo1 from '../components/landingPage/Promo1.vue'
import Accordion from '../components/landingPage/Accordion.vue'

export default {
  name: 'landingPage',
  components: {
    Jumbotron,
    PricingCard,
    Promo1,
    Accordion
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

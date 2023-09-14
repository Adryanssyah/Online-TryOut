<template lang="">
  <div class="py-6 px-4 mx-auto max-w-screen-xl">
    <h1 class="font-bold text-3xl my-5">
      Paket
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-orange-400"
        >Try Out</span
      >
    </h1>
    <h4 class="text-xl font-bold dark:text-white my-5">
      Silahkan pilih paket Try Out yang kamu mau!
    </h4>

    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex whitespace-nowrap -mb-px overflow-x-auto">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 text-black font-bold border-b-2 border-black rounded-t-lg active dark:text-black dark:border-black"
            >CPNS 2023</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >PPPK 2023</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >Kedinasan</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >SNBT 2024</a
          >
        </li>
      </ul>
    </div>

    <div class="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <PricingCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
    </div>
  </div>
</template>
<script>
import PricingCard from '../components/landingPage/PricingCard.vue'
export default {
  name: 'PacketList',
  components: {
    PricingCard
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
<style lang=""></style>

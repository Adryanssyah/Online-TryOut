<template lang="">
  <div class="lg:col-span-3 order-2 lg:order-1 w-full mb-10">
    <div class="w-full rounded pr-2 bg-white border">
      <div
        class="grid gap-2 grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-4 px-3 my-3 max-h-[590px] overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300"
      >
        <button
          v-for="index in jumlahSoal"
          :key="index"
          :aria-label="'nomor-soal-' + index"
          :class="{ 'bg-black text-white hover:bg-gray-800': index === 1 }"
          class="py-2 rounded border border-gray-400 font-semibold hover:bg-gray-200"
        >
          {{ index }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jumlahSoal: 100
    }
  }
}
</script>
<style lang=""></style>

<template lang="">
  <div v-if="isLoading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
    <div v-for="index in 12" :key="index" class="rounded-lg py-10 bg-gray-200 animate-pulse"></div>
  </div>
  <div v-if="!isLoading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
    <Card v-for="(item, index) in packageTypes" :key="item.id" :package="item" />
  </div>
  <div
    v-if="packageTypes.length === 0 && !isLoading"
    class="w-full flex items-center justify-center gap-10 flex-col py-5"
  >
    <img src="@/assets/image/empty.svg" alt="empty" class="w-40 h-w-40" />
    <div class="text-center">
      <p class="text-lg mb-2 text-yellow-500 font-semibold">Tidak ada tipe paket</p>
      <p class="text-sm">klik <strong>"Tambah"</strong> untuk menambahkan tipe paket!</p>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Cards/Package.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
export default {
  data() {
    return {
      isLoading: true,
      packageTypes: []
    }
  },
  components: {
    Card
  },
  methods: {
    async getDataPackageType() {
      const response = await requestWithBearer('package-type', 'GET', '')
      response.success ? (this.packageTypes = response.data.data) : ''
      this.isLoading = false
    }
  },
  async mounted() {
    await this.getDataPackageType()
    console.log(this.packageTypes.length)
  }
}
</script>
<style lang=""></style>

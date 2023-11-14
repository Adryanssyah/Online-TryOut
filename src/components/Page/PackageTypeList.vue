<template lang="">
  <div v-if="isLoading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
    <div v-for="index in 12" :key="index" class="rounded-lg py-10 bg-gray-200 animate-pulse"></div>
  </div>
  <div v-if="!isLoading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
    <TransitionGroup
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
    >
      <Card v-for="(item, index) in packageTypes" :key="item.id" :package="item" />
    </TransitionGroup>
  </div>
  <div
    v-if="packageTypes.length === 0 && !isLoading && !error"
    class="w-full flex items-center justify-center gap-10 flex-col py-5"
  >
    <img src="@/assets/image/empty.svg" alt="empty" class="w-40 h-w-40" />
    <div class="text-center">
      <p class="text-lg mb-2 text-yellow-500 font-semibold">Tidak ada tipe paket</p>
      <p class="text-sm">klik <strong>"Tambah"</strong> untuk menambahkan tipe paket!</p>
    </div>
  </div>

  <div
    v-if="!isLoading && error"
    class="w-full flex items-center justify-center gap-10 flex-col py-5"
  >
    <img src="@/assets/image/error.svg" alt="error" class="w-40 h-w-40" />
    <div class="text-center flex items-center flex-col gap-3">
      <p class="text-lg font-semibold">Sepertinya sedang terjadi gangguan!</p>
      <button
        type="button"
        @click="reloadData"
        class="flex items-center gap-2 justify-center flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <i class="bi bi-arrow-clockwise"></i>
        <span>Muat Ulang</span>
      </button>
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
      packageTypes: [],
      error: false
    }
  },
  components: {
    Card
  },
  methods: {
    async getDataPackageType() {
      const response = await requestWithBearer('package-type', 'GET', '')
      response.success
        ? ((this.packageTypes = response.data), (this.error = false))
        : (this.error = true)
      this.isLoading = false
    },
    async reloadData() {
      await this.getDataPackageType()
    }
  },
  async mounted() {
    await this.getDataPackageType()
  }
}
</script>
<style lang=""></style>

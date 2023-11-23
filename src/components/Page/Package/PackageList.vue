<template>
  <Loader v-if="isLoading" />
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
    <Card v-if="!isLoading" v-for="(item, index) in packages" :key="index" :package="item" />
  </div>

  <NotFound v-if="packages.length === 0 && !isLoading && !error" :title="'Paket'" />
  <Disturb v-if="!isLoading && error" @reload="getPackage" />
</template>
<script>
import Card from '@/components/Cards/Package.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
import Loader from '@/components/Loader/Spinner.vue'
import NotFound from '@/components/Error/NotFound.vue'
import Disturb from '@/components/Error/Disturb.vue'
export default {
  components: {
    Card,
    Loader,
    NotFound,
    Disturb
  },
  data: () => ({
    isLoading: true,
    packages: [],
    error: false
  }),
  methods: {
    async getPackage() {
      this.isLoading = true
      const response = await requestWithBearer('package', 'GET')
      response.success
        ? ((this.packages = response.data), (this.error = false))
        : (this.error = true)
      this.isLoading = false
    }
  },
  async mounted() {
    await this.getPackage()
  }
}
</script>

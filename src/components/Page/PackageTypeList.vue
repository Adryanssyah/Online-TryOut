<template lang="">
  <Loader v-if="isLoading" />
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

  <NotFound v-if="packageTypes.length === 0 && !isLoading && !error" :title="'Tipe Paket'" />
  <Disturb v-if="!isLoading && error" @reload="getDataPackageType" />
</template>
<script>
import Card from '@/components/Cards/Package.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
import Loader from '@/components/Loader/Spinner.vue'
import NotFound from '@/components/Error/NotFound.vue'
import Disturb from '@/components/Error/Disturb.vue'
export default {
  data() {
    return {
      isLoading: true,
      packageTypes: [],
      error: false
    }
  },
  components: {
    Card,
    Loader,
    NotFound,
    Disturb
  },
  methods: {
    async getDataPackageType() {
      this.isLoading = true
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

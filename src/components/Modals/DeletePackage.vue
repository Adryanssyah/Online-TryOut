<template>
  <section class="w-full flex justify-between items-center flex-col gap-10">
    <p class="text-center">
      Yakin ingin menghapus <strong>{{ itemName }}</strong
      >?
    </p>
    <form @submit.prevent="deleteData" class="py-2 w-full flex justify-center items-center">
      <button
        type="submit"
        :disabled="isLoading"
        :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        {{ isLoading ? 'Loading...' : 'Hapus' }}
      </button>
    </form>
  </section>
</template>

<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'

import { useFloatAlertStore } from '@/stores/FloatAlert'

export default {
  props: {
    index: {
      type: Number,
      default: null
    },
    itemName: String,
    pushTo: String,
    dataToDelete: [Object, String],
    url: String
  },
  emits: ['close', 'push', 'delete'],
  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    async deleteData() {
      this.isLoading = true
      const { showFloatAlert } = useFloatAlertStore()
      const response = await requestWithBearer(this.url, 'DELETE', {
        id: this.dataToDelete.id
      })

      if (response.success) {
        if (response.data.success) {
          showFloatAlert(response.data.message, 'success')
          this.isLoading = false
          this.$emit('close')
          if (this.index !== null) {
            this.$emit('delete', this.index)
          }
          this.$router.push({ name: this.pushTo })
        } else if (!response.data.success) {
          showFloatAlert(response.data.message, 'error')
          this.isLoading = false
          this.$emit('close')
        }
      } else if (!response.success) {
        showFloatAlert('sepertinya sedang terjadi masalah, coba lagi nanti', 'error')
        this.isLoading = false
      }
    }
  }
}
</script>

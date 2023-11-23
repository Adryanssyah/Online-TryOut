<template lang="">
  <div class="w-full flex items-center justify-center gap-10 flex-col py-5">
    <img src="@/assets/image/error.svg" alt="error" class="w-40 h-w-40" />
    <div class="text-center flex items-center flex-col gap-3">
      <p class="text-lg font-semibold">Sepertinya sedang terjadi gangguan!</p>
      <button
        type="button"
        @click="reload"
        class="flex items-center gap-2 justify-center flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <i class="bi bi-arrow-clockwise"></i>
        <span>Muat Ulang</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    reload() {
      this.$emit('reload')
    }
  }
}
</script>
<style lang=""></style>

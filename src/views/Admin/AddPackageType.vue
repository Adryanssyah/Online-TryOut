<template lang="">
  <h1
    class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
  >
    Tipe Paket
  </h1>

  <div class="mb-6 flex w-full justify-between flex-col lg:flex-row gap-5">
    <input
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 min-w-[350px] text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
      placeholder="Cari Tipe Paket"
    />
    <button
      type="button"
      @click="toggleModalAddPackageShow"
      class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
    >
      Tambah
    </button>
  </div>

  <PackageTypeList ref="packageTypeRef" />

  <ModalPackageType
    :title="'Tambah'"
    :modalShow="modalPackageTypeShow"
    @reload="triggerReload"
    @close="toggleModalAddPackageShow"
  />
</template>
<script>
import PackageTypeList from '@/components/Page/PackageTypeList.vue'
import ModalPackageType from '@/components/Modals/PackageTypeModal.vue'
export default {
  name: '',
  data() {
    return {
      modalPackageTypeShow: false
    }
  },
  components: {
    ModalPackageType,
    PackageTypeList
  },
  methods: {
    toggleModalAddPackageShow() {
      this.modalPackageTypeShow = !this.modalPackageTypeShow
    },
    triggerReload() {
      const packageTypeListComponent = this.$refs.packageTypeRef
      packageTypeListComponent.reloadData()
    }
  }
}
</script>

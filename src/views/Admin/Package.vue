<template lang="">
  <h1
    class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
  >
    Paket Try Out
  </h1>

  <div class="mb-6 flex w-full justify-between flex-col lg:flex-row gap-5">
    <input
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 min-w-[350px] text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
      placeholder="Cari Paket"
    />
    <button
      type="button"
      @click="toggleModalAddPackageShow"
      class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
    >
      Tambah
    </button>
  </div>

  <ModalAddPackage
    :title="'Tambah Paket'"
    :modalShow="modalPackageTypeShow"
    @close="toggleModalAddPackageShow"
    @alert="toggleAlert"
  />
  <Teleport to="body">
    <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
  </Teleport>
</template>
<script>
import ModalAddPackage from '@/components/Modals/AddPackage.vue'
import floatAlert from '@/components/Alerts/Float.vue'
export default {
  data() {
    return {
      modalPackageTypeShow: false,
      floatAlert: {
        visible: false,
        message: '',
        type: ''
      }
    }
  },
  components: {
    ModalAddPackage,
    floatAlert
  },
  methods: {
    toggleModalAddPackageShow() {
      this.modalPackageTypeShow = !this.modalPackageTypeShow
    },
    toggleAlert({ type, message }) {
      this.floatAlert.visible = !this.floatAlert.visible
      this.floatAlert.message = message
      this.floatAlert.type = type
    }
  }
}
</script>

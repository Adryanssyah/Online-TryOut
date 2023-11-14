<template lang="">
  <nav class="flex mb-4" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <a
          href="#"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <svg
            class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <a
            href="#"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-yellow-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >Projects</a
          >
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <svg
            class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
            >Flowbite</span
          >
        </div>
      </li>
    </ol>
  </nav>
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
  <KeepAlive>
    <PackageTypeList ref="packageTypeRef" />
  </KeepAlive>
  <ModalPackageType
    :title="'Tambah'"
    :modalShow="modalPackageTypeShow"
    @reload="triggerReload"
    @close="toggleModalAddPackageShow"
    @alert="toggleAlert"
  />
  <Teleport to="body">
    <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
  </Teleport>
</template>
<script>
import ModalPackageType from '@/components/Modals/PackageTypeModal.vue'
import PackageTypeList from '@/components/Page/PackageTypeList.vue'
import floatAlert from '@/components/Alerts/Float.vue'
export default {
  name: 'Dashboard',
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
    ModalPackageType,
    PackageTypeList,
    floatAlert
  },
  methods: {
    toggleModalAddPackageShow() {
      this.modalPackageTypeShow = !this.modalPackageTypeShow
    },
    triggerReload() {
      const packageTypeListComponent = this.$refs.packageTypeRef
      packageTypeListComponent.reloadData()
    },
    toggleAlert({ type, message }) {
      this.floatAlert.visible = !this.floatAlert.visible
      this.floatAlert.message = message
      this.floatAlert.type = type
    }
  }
}
</script>

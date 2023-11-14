<template lang="">
  <main v-if="!isLoading">
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
    <div class="flex items-end">
      <h1
        class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
      >
        {{ packageTypeName }}
        <span class="text-base font-light mx-2">|</span>
        <button @click="toggleModalPackageShow" class="text-yellow-500 hover:text-yellow-700">
          <i class="bi bi-pencil-fill text-base"></i>
        </button>
        <span class="text-base font-light mx-2">|</span>
        <button @click="toggleModalDeleteShow" class="text-red-500 hover:text-red-700">
          <i class="bi bi-trash-fill text-base"></i>
        </button>
      </h1>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 py-5 border-b">
      <inputText :label="'Nama Detail'" placeholder="E.g. TWK" :id="'nama'" type="text" />
      <inputText
        :label="'Banyak Pertanyaan'"
        placeholder="E.g. 40"
        :id="'pertanyaan'"
        type="text"
      />
      <inputText
        :label="'Banyak Pilihan Jawaban'"
        placeholder="Min. 2, Max. 5"
        :id="'jawaban'"
        type="text"
      />
      <inputText
        :label="'Poin Jawaban Benar'"
        placeholder="E.g. 4"
        :id="'poin-benar'"
        type="text"
      />
      <inputText
        :label="'Poin Jawaban Salah'"
        placeholder="E.g. 0"
        :id="'poin-salah'"
        type="text"
      />
      <inputText :label="'Skor Minimal'" placeholder="E.g. 65" :id="'skor'" type="text" />
    </div>
    <div class="w-full flex justify-between py-5">
      <button
        type="button"
        class="flex items-center gap-2 justify-center flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <i class="bi bi-plus"></i>
        <span>Tambah Detail</span>
      </button>
      <button
        type="button"
        class="flex items-center gap-2 justify-center flex-nowrap text-white bg-yellow-500 border border-yellow-300 focus:outline-none hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Simpan Data
      </button>
    </div>
  </main>
  <ModalPackageType
    v-if="!isLoading"
    :title="'Edit'"
    :packageData="packageData"
    :modalShow="modalPackageTypeShow"
    @close="toggleModalPackageShow"
    @reload="loadData"
    @alert="toggleAlert"
  />
  <ModalDelete
    v-if="!isLoading"
    :title="packageTypeName"
    :packageData="packageData"
    :modalShow="modalDeleteShow"
    :pushTo="'AddPackageType'"
    @close="toggleModalDeleteShow"
    @alert="toggleAlert"
  />
  <Teleport to="body">
    <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
  </Teleport>
</template>
<script>
import ModalPackageType from '@/components/Modals/PackageTypeModal.vue'
import ModalDelete from '@/components/Modals/ModalDelete.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
import floatAlert from '@/components/Alerts/Float.vue'
import inputText from '@/components/Forms/Text.vue'
export default {
  props: ['id'],
  components: {
    inputText,
    ModalPackageType,
    floatAlert,
    ModalDelete
  },
  data() {
    return {
      modalPackageTypeShow: false,
      modalDeleteShow: false,
      isLoading: true,
      packageData: {},
      modalPackageTypeShow: false,
      floatAlert: {
        visible: false,
        message: '',
        type: ''
      },
      packageTypeName: null,
      packageTypeDetail: null
    }
  },
  methods: {
    toggleAlert({ type, message }) {
      this.floatAlert.visible = !this.floatAlert.visible
      this.floatAlert.message = message
      this.floatAlert.type = type
    },
    toggleModalPackageShow() {
      this.modalPackageTypeShow = !this.modalPackageTypeShow
    },
    toggleModalDeleteShow() {
      this.modalDeleteShow = !this.modalDeleteShow
    },
    async loadData() {
      const response = await requestWithBearer('package-type-show', 'GET', { id: this.id })

      response.success
        ? ((this.packageTypeDetail = response.data[0].package_type_detail),
          (this.packageTypeName = response.data[0].package_type_name),
          (this.packageData = {
            id: response.data[0].id,
            packageTypeName: response.data[0].package_type_name
          }),
          (this.isLoading = false))
        : ''
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

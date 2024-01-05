<template>
  <main v-if="!isLoading && !error">
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
    <PackageTypeDetail
      :packageTypeName="packageTypeName"
      :id="packageData.id"
      :packageTypeDetail="packageTypeDetail"
    />
  </main>
  <Loader v-if="isLoading" />
  <ModalPackageType
    v-if="!isLoading"
    :title="'Edit'"
    :packageData="packageData"
    :modalShow="modalPackageTypeShow"
    @close="toggleModalPackageShow"
    @reload="loadData"
  />

  <Modal
    v-if="!isLoading"
    title="Hapus Sub Tipe Paket"
    size="extraSmall"
    :modalShow="modalDeleteShow"
    @close="toggleModalDeleteShow"
  >
    <ModalDeletePackage
      :itemName="packageTypeName"
      :dataToDelete="packageData"
      :pushTo="'AddPackageType'"
      :url="'package-type'"
      @close="toggleModalDeleteShow"
    ></ModalDeletePackage
  ></Modal>

  <Disturb v-if="!isLoading && error" @reload="loadData" />
</template>
<script>
import PackageTypeDetail from '@/components/Page/PackageDetail/PackageTypeDetail.vue'
import ModalPackageType from '@/components/Modals/PackageTypeModal.vue'
import Modal from '@/components/Modals/Base/Modal.vue'
import ModalDeletePackage from '@/components/Modals/DeletePackage.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
import Loader from '@/components/Loader/Spinner.vue'
import Disturb from '@/components/Error/Disturb.vue'
export default {
  props: ['id'],
  components: {
    ModalPackageType,
    Modal,
    ModalDeletePackage,
    PackageTypeDetail,
    Loader,
    Disturb
  },
  data() {
    return {
      modalPackageTypeShow: false,
      modalDeleteShow: false,
      isLoading: true,
      packageData: {},
      modalPackageTypeShow: false,
      packageTypeName: null,
      packageTypeDetail: null,
      error: false
    }
  },
  methods: {
    toggleModalPackageShow() {
      this.modalPackageTypeShow = !this.modalPackageTypeShow
    },
    toggleModalDeleteShow() {
      this.modalDeleteShow = !this.modalDeleteShow
    },
    async loadData() {
      this.isLoading = true
      this.error = false
      const response = await requestWithBearer('package-type-show', 'GET', { id: this.id })
      response.success
        ? ((this.packageTypeDetail = response.data[0].package_type_detail),
          (this.packageTypeName = response.data[0].package_type_name),
          (this.packageData = {
            id: response.data[0].id,
            packageTypeName: response.data[0].package_type_name
          }),
          (this.error = false),
          (this.isLoading = false))
        : (this.error = true),
        (this.isLoading = false)
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

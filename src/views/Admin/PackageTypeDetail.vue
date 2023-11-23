<template lang="">
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
    @alert="toggleAlert"
  />
  <ModalDelete
    v-if="!isLoading"
    :title="packageTypeName"
    :packageData="packageData"
    :modalShow="modalDeleteShow"
    :pushTo="'AddPackageType'"
    :url="'package-type'"
    @close="toggleModalDeleteShow"
    @alert="toggleAlert"
  />
  <Teleport to="body">
    <floatAlert @toggleAlert="toggleAlert" :floatAlert="floatAlert" />
  </Teleport>

  <Disturb v-if="!isLoading && error" @reload="loadData" />
</template>
<script>
import PackageTypeDetail from '@/components/Page/PackageDetail/PackageTypeDetail.vue'
import ModalPackageType from '@/components/Modals/PackageTypeModal.vue'
import ModalDelete from '@/components/Modals/ModalDelete.vue'
import requestWithBearer from '@/composables/API/RequestWithBearer'
import floatAlert from '@/components/Alerts/Float.vue'
import Loader from '@/components/Loader/Spinner.vue'
import Disturb from '@/components/Error/Disturb.vue'
export default {
  props: ['id'],
  components: {
    ModalPackageType,
    floatAlert,
    ModalDelete,
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
      floatAlert: {
        visible: false,
        message: '',
        type: ''
      },
      packageTypeName: null,
      packageTypeDetail: null,
      error: false
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
  async mounted() {
    await this.loadData()
  }
}
</script>

<template lang="">
  <h2
    class="text-2xl font-semibold text-ellipsis whitespace-nowrap max-w-full overflow-hidden pr-5"
  >
    Sub Tipe Paket
    <span class="">{{ packageTypeName }} </span>
  </h2>
  <TransitionGroup
    name="appear"
    enter-from-class="opacity-0 -translate-y-4"
    leave-to-class="opacity-0 -translate-y-4"
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
  >
    <PackageDetailForms
      v-for="(sub, index) in packageTypeDetail"
      :key="sub.id"
      :index="index"
      :packageTypeDetail="sub"
      :packageTypeId="id"
      @deleteSub="deleteSub"
      @openModalDelete="toggleModalDeleteShow"
    />
    <div class="w-full flex justify-center py-5" :key="0">
      <button
        v-if="packageTypeDetail && packageTypeDetail.length < 5"
        type="button"
        @click="addSub"
        class="flex items-center gap-2 justify-center flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <i class="bi bi-plus"></i>
        <span>Tambah Sub</span>
      </button>
    </div>
  </TransitionGroup>

  <Modal
    title="Hapus Sub Tipe Paket"
    size="extraSmall"
    :modalShow="modalDeleteShow"
    @close="toggleModalDeleteShow"
  >
    <ModalDeletePackage
      :itemName="packageTypeDetailNameToDelete"
      :dataToDelete="packageTypeDetailIdToDelete"
      :pushTo="'PackageTypeDetail'"
      :url="'package-type-detail'"
      :index="packageTypeDetailIndexToDelete"
      @close="toggleModalDeleteShow"
      @delete="deleteSub"
    ></ModalDeletePackage
  ></Modal>
</template>
<script>
import PackageDetailForms from '@/components/Page/PackageDetail/PackageDetailForm.vue'
import Modal from '@/components/Modals/Base/Modal.vue'
import ModalDeletePackage from '@/components/Modals/DeletePackage.vue'
export default {
  props: {
    id: { type: Number },
    packageTypeDetail: {
      type: Array,
      default: null
    },
    packageTypeName: { type: String }
  },
  data() {
    return {
      modalDeleteShow: false,
      packageTypeDetailNameToDelete: '',
      packageTypeDetailIdToDelete: '',
      packageTypeDetailIndexToDelete: null
    }
  },
  components: {
    PackageDetailForms,
    Modal,
    ModalDeletePackage
  },
  methods: {
    addSub() {
      if (this.packageTypeDetail.length < 5)
        this.packageTypeDetail.push({
          id: this.packageTypeDetail[this.packageTypeDetail.length - 1].id + 1
        })
    },
    deleteSub(index) {
      if (this.packageTypeDetail.length > 1) this.packageTypeDetail.splice(index, 1)
    },
    toggleModalDeleteShow(id = '', name = '', index = null) {
      this.packageTypeDetailIdToDelete = id
      this.packageTypeDetailNameToDelete = name
      this.modalDeleteShow = !this.modalDeleteShow
      this.packageTypeDetailIndexToDelete = index
    }
  },
  mounted() {
    if (this.packageTypeDetail.length === 0) this.packageTypeDetail.push({ id: 1 })
  }
}
</script>
<style lang=""></style>

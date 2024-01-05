<template lang="">
  <h1
    class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
  >
    Paket Try Out
  </h1>

  <div class="mb-2 flex w-full justify-end flex-col lg:flex-row gap-5">
    <PrimaryButton type="button" size="small" @click="toggleModal">Tambah</PrimaryButton>
  </div>

  <PackageList ref="getPackageList" />

  <Modal title="Tambah Paket" size="large" :modalShow="modalShow" @close="toggleModal">
    <ModalAddPackage @close="toggleModal" @loadData="loadData" />
  </Modal>
</template>

<script>
import Modal from '@/components/Modals/Base/Modal.vue'
import ModalAddPackage from '@/components/Modals/AddPackage.vue'
import PackageList from '@/components/Page/Package/PackageList.vue'
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue'

export default {
  data() {
    return {
      modalShow: false
    }
  },
  components: {
    ModalAddPackage,
    PackageList,
    Modal,
    PrimaryButton
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow
    },
    loadData() {
      const pacakgeListComponent = this.$refs.getPackageList
      pacakgeListComponent.getPackage()
    }
  }
}
</script>

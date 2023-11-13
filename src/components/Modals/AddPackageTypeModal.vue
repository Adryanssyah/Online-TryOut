<template lang="">
  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
  >
    <div
      v-if="modalShow"
      class="fixed top-0 left-0 w-full min-h-screen z-50 flex justify-center items-center"
    >
      <div
        @click="closeModal"
        class="absolute top-0 left-0 w-full min-h-screen backdrop-blur-sm bg-gray-500 blur-sm bg-opacity-50"
      ></div>
      <div class="bg-white p-5 rounded-xl mt-20 z-50 mx-5 min-w-[370px]">
        <div class="flex justify-between mb-10">
          <h2 class="text-lg">Tambah Tipe Paket</h2>
          <button @click="closeModal" class="px-2 py-1 rounded-lg hover:bg-gray-100">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <form @submit.prevent="addPackageType">
          <textInput
            :label="'Nama Tipe Paket'"
            :id="'packageTypeName'"
            v-model="packageTypeName"
            type="text"
            placeholder="E.g. Kedinasan"
          />
          <div class="w-full mt-10 flex justify-end">
            <button
              type="submit"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
<script>
import textInput from '@/components/Forms/Text.vue'
import axios from 'axios'
export default {
  props: {
    modalShow: Boolean
  },
  data() {
    return {
      packageTypeName: ''
    }
  },
  components: {
    textInput
  },
  methods: {
    outsideClick() {
      console.log('halo')
    }
  },

  watch: {
    modalShow(newValue) {
      newValue
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    async addPackageType() {
      await axios
        .request({
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tryoutkuToken').split('|')[1]}`
          },
          method: 'POST',
          url: `package-type`,
          params: {
            package_type_name: this.packageTypeName
          }
        })
        .then((response) => {
          console.log(response.data.success)
          response.data.success ? this.$emit('close') : ''
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

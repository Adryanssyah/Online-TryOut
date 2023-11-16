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
      <div class="bg-white p-5 rounded-xl mt-20 z-50 mx-5 w-full max-w-[370px]">
        <div class="flex justify-end mb-10">
          <button @click="closeModal" class="px-2 py-1 rounded-lg hover:bg-gray-100">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <section class="w-full flex justify-between items-center flex-col gap-10">
          <p class="text-center">
            Yakin ingin menghapus <strong>{{ title }}</strong
            >?
          </p>
          <form @submit.prevent="deleteData" class="py-2 w-full flex justify-center items-center">
            <button
              type="submit"
              :disabled="isLoading"
              :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              {{ isLoading ? 'Loading...' : 'Hapus' }}
            </button>
          </form>
        </section>
      </div>
    </div>
  </Transition>
</template>
<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'

export default {
  props: {
    index: {
      type: Number,
      default: null
    },
    modalShow: Boolean,
    title: String,
    pushTo: String,
    packageData: [Object, String],
    url: String
  },
  emits: ['close', 'alert', 'push', 'delete'],
  data() {
    return {
      isLoading: false
    }
  },
  components: {},

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
    async deleteData() {
      this.isLoading = true
      const response = await requestWithBearer(this.url, 'DELETE', {
        id: this.packageData.id
      })

      if (response.success) {
        if (response.data.success) {
          this.$emit('alert', { type: 'berhasil', message: response.data.message })
          this.isLoading = false
          this.$emit('close')
          if (this.index !== null) {
            this.$emit('delete', this.index)
          }
          this.$router.push({ name: this.pushTo })
        } else if (!response.data.success) {
          this.$emit('alert', { type: 'gagal', message: response.data.message })
          this.isLoading = false
          this.$emit('close')
        }
      } else if (!response.success) {
        this.$emit('alert', {
          type: 'gagal',
          message: 'sepertinya sedang terjadi masalah, coba lagi nanti'
        })
        this.isLoading = false
      }
    }
  }
}
</script>

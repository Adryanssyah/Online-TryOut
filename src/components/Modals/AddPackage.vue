<template lang="">
  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
  >
    <div
      v-if="modalShow"
      class="fixed top-0 left-0 w-full min-h-full z-50 flex justify-center items-center max-h-screen py-20"
    >
      <div
        @click="closeModal"
        class="absolute top-0 left-0 w-full min-h-full backdrop-blur-sm bg-gray-500 blur-sm bg-opacity-50"
      ></div>
      <div class="max-h-screen overflow-y-auto w-full flex justify-center py-10">
        <div
          class="bg-white relative p-5 rounded-xl z-50 mx-5 w-full max-w-full h-full lg:max-w-[760px]"
        >
          <div class="flex justify-between mb-10 px-2">
            <h2 class="text-lg">{{ title }}</h2>
            <button @click="closeModal" class="px-2 py-1 rounded-lg hover:bg-gray-100">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <Spinner v-if="isLoading" />

          <form v-if="!isLoading" @submit.prevent="lihatIsi">
            <section class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 pb-2">
              <textInput
                :label="'Nama Paket'"
                placeholder="Nama Paket"
                :id="'nama'"
                type="text"
                autocomplete="off"
                class="w-full"
                v-model="params.package_name"
                :error="errors.package_name ? errors.package_name[0] : ''"
              />

              <div>
                <label
                  class="block text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-gray-900"
                  >Pilih Layanan</label
                >
                <div class="flex gap-2">
                  <Radio
                    v-for="(item, index) in layanan"
                    :key="index"
                    :value="item"
                    name="layanan"
                    v-model="params.access_type"
                    :error="errors.access_type ? errors.access_type[0] : ''"
                  />
                </div>
                <p v-if="errors.access_type" class="text-xs text-red-500">
                  {{ errors.access_type[0] }}
                </p>
              </div>

              <searchSelect
                :type="'Status'"
                :options="status"
                v-model="selection.package_status"
                :error="errors.package_status ? errors.package_status[0] : ''"
              />

              <searchSelect
                :type="'Tipe Paket'"
                :options="packageType"
                v-model="selection.package_type_id"
                :error="errors.package_type_id ? errors.package_type_id[0] : ''"
              />

              <searchSelect
                :type="'Tipe Pembayaran'"
                :options="paymentType"
                v-model="selection.payment_type"
                :error="errors.payment_type ? errors.payment_type[0] : ''"
              />

              <currencyInput
                v-if="!selection.payment_type || selection.payment_type.value !== 'F'"
                :label="'Harga'"
                placeholder="Harga Paket"
                :id="'harga'"
                class="w-full"
                autocomplete="off"
                v-model="params.price"
                :error="errors.price ? errors.price[0] : ''"
              />

              <currencyInput
                v-if="!selection.payment_type || selection.payment_type.value !== 'F'"
                :label="'Diskon'"
                placeholder="Diskon Harga Paket"
                :id="'diskon'"
                class="w-full"
                autocomplete="off"
                v-model="params.discount"
                :error="errors.discount ? errors.discount[0] : ''"
              />

              <textInput
                v-if="!params.access_type || params.access_type === 'Materi + Tryout'"
                :label="'Jumlah Peserta'"
                placeholder="Banyak Peserta"
                :id="'peserta'"
                type="number"
                class="w-full"
                v-model="params.package_allow_access_count"
                :error="
                  errors.package_allow_access_count ? errors.package_allow_access_count[0] : ''
                "
              />

              <textInput
                v-if="!params.access_type || params.access_type === 'Materi + Tryout'"
                :label="'Mulai Dari'"
                :id="'tanggal-mulai'"
                type="datetime-local"
                class="w-full"
                v-model="params.start_date"
                :error="errors.start_date ? errors.start_date[0] : ''"
              />

              <textInput
                v-if="!params.access_type || params.access_type === 'Materi + Tryout'"
                :label="'Berakhir Hingga'"
                :id="'tanggal-selesai'"
                type="datetime-local"
                class="w-full"
                v-model="params.end_date"
                :error="errors.end_date ? errors.end_date[0] : ''"
              />
            </section>
            <div class="w-full mt-10 flex justify-end px-2">
              <button
                :disabled="saveLoading"
                :class="{ 'opacity-50 cursor-not-allowed': saveLoading }"
                type="submit"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                {{ saveLoading ? 'Loading...' : 'Simpan' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'
import textInput from '@/components/Forms/Text.vue'
import searchSelect from '@/components/Forms/SearchSelect.vue'
import currencyInput from '@/components/Forms/Currency.vue'
import Radio from '@/components/Forms/radio.vue'
import Spinner from '@/components/Loader/Spinner.vue'

export default {
  components: { textInput, searchSelect, currencyInput, Radio, Spinner },
  props: {
    index: {
      type: Number,
      default: null
    },
    modalShow: Boolean,
    title: String
  },
  emits: ['close', 'alert'],
  data: () => ({
    isLoading: true,
    saveLoading: false,
    params: {
      package_name: null,
      access_type: null,
      package_status: '',
      package_type_id: '',
      payment_type: '',
      price: null,
      discount: null,
      package_allow_access_count: null,
      start_date: null,
      end_date: null
    },
    selection: {
      package_status: {},
      package_type_id: {},
      payment_type: {}
    },
    layanan: ['Materi', 'Materi + Tryout'],
    status: [
      { value: 'O', label: 'Open' },
      { value: 'C', label: 'Closed' },
      { value: 'M', label: 'Maintenance' }
    ],
    paymentType: [
      { value: 'P', label: 'Berbayar' },
      { value: 'F', label: 'Gratis' },
      { value: 'R', label: 'Terbatas dengan Kode' }
    ],
    packageType: [],
    errors: {}
  }),
  watch: {
    modalShow(newValue) {
      newValue
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    },
    'selection.package_status'(newValue) {
      if (this.selection.package_status && newValue) {
        this.params.package_status = newValue.value
      }
    },
    'selection.package_type_id'(newValue) {
      if (this.selection.package_type_id && newValue) {
        this.params.package_type_id = newValue.value
      }
    },
    'selection.payment_type'(newValue) {
      if (this.selection.payment_type && newValue) {
        this.params.payment_type = newValue.value
      }
    }
  },

  methods: {
    closeModal() {
      this.$emit('close')
    },
    async lihatIsi() {
      this.saveLoading = true
      const response = await requestWithBearer('package', 'POST', this.params)

      if (response.success) {
        if (response.data.errors) {
          this.errors = response.data.errors
          this.saveLoading = false
        } else if (response.data.data) {
          this.$emit('alert', {
            type: 'berhasil',
            message: `Sukses Menambahkan Paket ${this.params.package_name}`
          })
          this.$emit('close')
          this.saveLoading = false
        } else if (!response.data.success) {
          this.$emit('alert', {
            type: 'gagal',
            message: `${response.data.message} (${
              this.packageType.find((obj) => obj.value === this.params.package_type_id).label
            })`
          })
          this.saveLoading = false
        }
      } else {
        this.saveLoading = false
        this.$emit('alert', {
          type: 'gagal',
          message: 'Maaf sepertinya sedang terjadi gangguan'
        })
      }
    }
  },
  async mounted() {
    const response = await requestWithBearer('package-type', 'GET', '')
    if (response.success) {
      this.packageType = response.data.map((obj) => ({
        value: obj.id,
        label: obj.package_type_name
      }))
      this.isLoading = false
    }
  }
}
</script>

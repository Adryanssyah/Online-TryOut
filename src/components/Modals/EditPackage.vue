<template>
  <section>
    <form v-if="!isLoading" @submit.prevent="editPackageData">
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
          :error="errors.package_allow_access_count ? errors.package_allow_access_count[0] : ''"
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
    <Spinner v-if="isLoading" />
  </section>
</template>

<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'
import textInput from '@/components/Forms/Text.vue'
import searchSelect from '@/components/Forms/SearchSelect.vue'
import currencyInput from '@/components/Forms/Currency.vue'
import Radio from '@/components/Forms/radio.vue'
import Spinner from '@/components/Loader/Spinner.vue'

import { useFloatAlertStore } from '@/stores/FloatAlert'

export default {
  name: 'EditPackage',
  props: {
    dataToEdit: {
      type: Object
    }
  },
  emits: ['close', 'loadData'],
  data: () => {
    return {
      isLoading: true,
      saveLoading: false,
      params: {},
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
    }
  },
  components: {
    textInput,
    searchSelect,
    currencyInput,
    Radio,
    Spinner
  },
  watch: {
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

  async mounted() {
    const response = await requestWithBearer('package-type', 'GET', '')
    if (response.success) {
      this.packageType = response.data.map((obj) => ({
        value: obj.id,
        label: obj.package_type_name
      }))
      this.isLoading = false
    }
    this.handleSelections()
  },
  methods: {
    handleSelections() {
      this.selection.package_status = this.status.find(
        (obj) => obj.value === this.params.package_status
      )
      this.selection.package_type_id = {
        value: this.params.package_type.id,
        label: this.params.package_type.package_type_name
      }
      this.selection.payment_type = this.paymentType.find(
        (obj) => obj.value === this.params.payment_type
      )
    },

    async editPackageData() {
      this.saveLoading = true
      const { showFloatAlert } = useFloatAlertStore()
      const response = await requestWithBearer('package', 'PUT', this.params)
      if (response.success) {
        if (response.data.errors) {
          this.errors = response.data.errors
          this.saveLoading = false
        } else if (response.data.data) {
          showFloatAlert(`Sukses Menambahkan Paket ${this.params.package_name}`, 'success')
          this.$emit('close')
          this.$emit('loadData')
          this.saveLoading = false
        } else if (!response.data.success) {
          showFloatAlert(
            `${response.data.message} (${
              this.packageType.find((obj) => obj.value === this.params.package_type_id).label
            })`,
            'error'
          )
          this.saveLoading = false
        }
      } else {
        this.saveLoading = false
        showFloatAlert('Maaf sepertinya sedang terjadi gangguan', 'error')
      }
    }
  },
  created() {
    this.params = this.dataToEdit
  }
}
</script>

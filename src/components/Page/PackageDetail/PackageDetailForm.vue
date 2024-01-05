<template lang="">
  <div
    class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-5 py-5 border-b overflow-y-auto scrollbar-thin px-1"
  >
    <inputText
      :label="'Nama Sub'"
      placeholder="E.g. TIU"
      :id="'nama-' + index"
      type="text"
      :class="'font-bold'"
      v-model="params.package_type_detail_name"
      :error="errors.package_type_detail_name ? errors.package_type_detail_name[0] : ''"
    />
    <inputText
      :label="'Banyak Pertanyaan'"
      placeholder="E.g. 40"
      :id="'pertanyaan-' + index"
      type="text"
      @keypress="handleInput($event)"
      :maxlength="3"
      :class="'text-center'"
      v-model="params.question_count"
      :error="errors.question_count ? errors.question_count[0] : ''"
    />
    <inputText
      :label="'Opsi Jawaban'"
      placeholder="2 - 5"
      :id="'jawaban-' + index"
      type="text"
      :class="'text-center'"
      @keypress="handleInput($event, 2, 5)"
      :maxlength="1"
      v-model="params.answer_count_per_question"
      :error="errors.answer_count_per_question ? errors.answer_count_per_question[0] : ''"
    />
    <inputText
      :label="'Poin Benar'"
      placeholder="E.g. 4"
      :id="'poin-benar-' + index"
      type="text"
      :class="'text-center'"
      @keypress="handleInput($event)"
      :maxlength="3"
      v-model="params.correct_points_per_question"
      :error="errors.correct_points_per_question ? errors.correct_points_per_question[0] : ''"
    />
    <inputText
      :label="'Poin Salah'"
      placeholder="E.g. 0"
      :id="'poin-salah-' + index"
      type="number"
      min="-10"
      max="10"
      :maxlength="2"
      @keypress="handleInput($event)"
      :class="'text-center'"
      v-model="params.incorrect_points_per_question"
      :error="errors.incorrect_points_per_question ? errors.incorrect_points_per_question[0] : ''"
    />
    <inputText
      :label="'Skor Minimal'"
      placeholder="E.g. 65"
      :id="'skor-' + index"
      type="text"
      :class="'text-center'"
      @keypress="handleInput($event)"
      :maxlength="3"
      v-model="params.min_score"
      :error="errors.min_score ? errors.min_score[0] : ''"
    />
    <div class="flex items-end">
      <button
        type="button"
        @click="sendData"
        :disabled="isLoading"
        :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
        class="text-white bg-yellow-500 border border-yellow-300 focus:outline-none hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {{ isLoading ? 'Loading...' : 'Simpan' }}
      </button>
      <button
        type="button"
        v-if="!isLoading"
        @click="deleteSub(index)"
        class="text-black bg-white border font-bold focus:outline-none hover:bg-gray-200 text-sm focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
</template>
<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'
import inputText from '@/components/Forms/Text.vue'

import { useFloatAlertStore } from '@/stores/FloatAlert'

export default {
  components: {
    inputText
  },
  props: {
    packageTypeDetail: {
      type: Object,
      default: false
    },
    index: {
      type: Number,
      required: true
    },
    packageTypeId: {
      type: Number
    }
  },
  data() {
    return {
      params: {
        package_type_id: this.packageTypeId,
        package_type_detail_name: '',
        question_count: null,
        answer_count_per_question: null,
        correct_points_per_question: null,
        incorrect_points_per_question: null,
        min_score: null
      },
      errors: {},
      isLoading: true
    }
  },
  methods: {
    deleteSub() {
      if (this.params.id !== undefined) {
        this.$emit(
          'openModalDelete',
          { id: this.params.id },
          this.params.package_type_detail_name,
          this.index
        )
      } else {
        this.$emit('deleteSub', this.index)
      }
    },
    handleInput(evt, min = 0, max = 9) {
      const number = parseInt(evt.key)
      if (evt.keyCode > 57 || evt.keyCode < 48) {
        evt.preventDefault()
      } else if (number > max || number < min) {
        evt.preventDefault()
      }
    },

    async sendData() {
      let method = ''
      this.isLoading = true
      this.errors = {}
      const { showFloatAlert } = useFloatAlertStore()
      this.packageTypeDetail.package_type_id !== undefined ? (method = 'PUT') : (method = 'POST')
      const response = await requestWithBearer('package-type-detail', method, this.params)
      if (response.success && !response.data.errors) {
        this.params = response.data.data
        showFloatAlert('Berhasil Menyimpan Sub Tipe Paket', 'success')
        this.isLoading = false
      } else if (!response.success) {
        showFloatAlert('sepertinya sedang terjadi masalah, coba lagi nanti', 'success')
        this.isLoading = false
      }
      if (response.data.errors) {
        this.errors = response.data.errors
      }
      this.isLoading = false
    }
  },
  mounted() {
    if (this.packageTypeDetail.package_type_id !== undefined) {
      this.params = this.packageTypeDetail
    }

    this.isLoading = false
  }
}
</script>

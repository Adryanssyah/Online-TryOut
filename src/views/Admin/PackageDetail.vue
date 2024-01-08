<template lang="">
  <main v-if="!isLoading && !error">
    <div class="flex items-end">
      <h1
        class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
      >
        {{ package.package_name }}
      </h1>
    </div>
    <section class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <div class="flex justify-between items-center px-1 py-2">
          <h2 class="font-medium text-lg mb-2 text-gray-500">Detail Paket</h2>
          <div class="flex gap-2">
            <PrimaryButton type="button" size="small" @click="toggleModal"
              >Edit Paket</PrimaryButton
            >
            <SecondaryButton type="button" size="small" @click="toggleModalDelete"
              >Hapus Paket</SecondaryButton
            >
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <DetailTableRow title="Tipe Akses"> {{ package.access_type }} </DetailTableRow>
            <DetailTableRow title="Status">
              <span
                :class="{
                  'bg-blue-100 text-blue-800': package.package_status === 'O',
                  'bg-red-100 text-red-800': package.package_status === 'C',
                  'bg-yellow-100 text-yellow-800': package.package_status === 'M'
                }"
                class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >{{
                  package.package_status === 'O'
                    ? 'Open'
                    : package.package_status === 'C'
                    ? 'Closed'
                    : package.package_status === 'M'
                    ? 'Maintenance'
                    : ''
                }}</span
              >
            </DetailTableRow>
            <DetailTableRow title="Tipe Pembayaran">
              {{
                package.payment_type === 'F'
                  ? 'Gratis'
                  : package.payment_type === 'P'
                  ? 'Berbayar'
                  : package.payment_type === 'R'
                  ? 'Terbatas dengan kode'
                  : ''
              }}
            </DetailTableRow>
            <DetailTableRow title="Harga">
              {{
                package.payment_type === 'F'
                  ? '-'
                  : `Rp. ${package.price.toLocaleString('id-ID', {
                      StyleSheet: 'currency',
                      currency: 'IDR'
                    })}`
              }}
            </DetailTableRow>
            <DetailTableRow title="Diskon">
              {{
                package.payment_type === 'F'
                  ? '-'
                  : `Rp. ${package.price.toLocaleString('id-ID', {
                      StyleSheet: 'currency',
                      currency: 'IDR'
                    })}`
              }}
            </DetailTableRow>
            <DetailTableRow title="Kapasitas"
              >{{ package.package_allow_access_count }} Peserta
            </DetailTableRow>
            <DetailTableRow title="Tanggal Mulai">
              {{ dateFormatToID(package.start_date) }}
            </DetailTableRow>
            <DetailTableRow title="Tanggal Berakhir" :lastRow="true">
              {{ dateFormatToID(package.end_date) }}
            </DetailTableRow>
          </tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto sm:rounded-lg">
        <h2 class="font-medium text-lg mb-2 text-gray-500">Tipe Paket</h2>
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-5"
        >
          <tbody>
            <DetailTableRow title="Tipe Paket">
              <router-link
                :to="{ name: 'PackageTypeDetail', params: { id: package.package_type.id } }"
                class="text-blue-500 hover:underline"
              >
                {{ package.package_type.package_type_name }}</router-link
              >
            </DetailTableRow>
          </tbody>
        </table>

        <h2 class="font-medium text-lg mb-2 text-gray-500 mt-10">Detail Tipe Paket</h2>
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-5"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Detail</th>
              <th
                scope="col"
                class="px-6 py-3"
                v-for="(item, index) in package.package_type.package_type_detail"
                :key="item.id"
              >
                {{ item.package_type_detail_name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white dark:bg-gray-800 hover:bg-gray-50"
              :class="{ 'border-b dark:border-gray-700': key !== newDetailPackageArray.length - 1 }"
              v-for="(value, key) in packageDetailKey"
              :key="key"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
              >
                {{ value }}
              </th>
              <td class="px-6 py-4" v-for="(item, index) in newDetailPackageArray" :key="item.id">
                {{ item[value] }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-sm flex justify-end gap-5">
          <p>
            Banyak sub ujian: <strong>{{ newDetailPackageArray.length }}</strong
            >,
          </p>
          <p>
            Total Soal:
            <strong>{{ newDetailPackageArray.reduce((a, b) => a + b.question_count, 0) }}</strong
            >,
          </p>
          <p>
            Total skor minimal:
            <strong class="text-green-500">{{
              newDetailPackageArray.reduce((a, b) => a + b['skor minimal'], 0)
            }}</strong>
          </p>
        </div>
      </div>
    </section>
  </main>

  <Modal title="Edit Paket" :modalShow="modalShow" @close="toggleModal">
    <ModalEditPackage @close="toggleModal" @loadData="loadData" :dataToEdit="package" />
  </Modal>

  <Modal
    title="Hapus Paket"
    size="extraSmall"
    :modalShow="modalDeleteShow"
    @close="toggleModalDelete"
  >
    <ModalDeletePackage
      :itemName="package.package_name"
      :dataToDelete="package"
      :pushTo="'PackageAdmin'"
      url="package"
      @close="toggleModalDelete"
    ></ModalDeletePackage
  ></Modal>

  <Loader v-if="isLoading" />
  <Disturb v-if="!isLoading && error" @reload="loadData" />
</template>

<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'
import Loader from '@/components/Loader/Spinner.vue'
import Disturb from '@/components/Error/Disturb.vue'
import DetailTableRow from '@/components/Table/DetailTableRow.vue'
import Modal from '@/components/Modals/Base/Modal.vue'
import ModalDeletePackage from '@/components/Modals/DeletePackage.vue'
import ModalEditPackage from '@/components/Modals/EditPackage.vue'
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue'

export default {
  name: 'PackageDetailAdmin',
  props: ['id'],
  components: {
    Modal,
    ModalEditPackage,
    Loader,
    Disturb,
    DetailTableRow,
    PrimaryButton,
    SecondaryButton,
    ModalDeletePackage
  },
  data: () => {
    return {
      modalShow: false,
      modalDeleteShow: false,
      package: [],
      isLoading: true,
      error: false,
      newDetailPackageArray: [],
      packageDetailKey: [
        'banyak pertanyaan',
        'banyak pilihan jawaban',
        'poin benar',
        'poin salah',
        'skor minimal'
      ]
    }
  },
  methods: {
    async loadData() {
      const response = await requestWithBearer('package-show', 'GET', { id: this.id })
      response.success
        ? ((this.package = response.data[0]),
          (this.isLoading = false),
          this.remapDetailPackage(this.package.package_type.package_type_detail))
        : ((this.error = true), (this.isLoading = false))
    },

    remapDetailPackage(array) {
      this.newDetailPackageArray = array.map((item) => {
        return {
          ...item,
          'banyak pertanyaan': item.question_count,
          'banyak pilihan jawaban': item.answer_count_per_question,
          'poin benar': item.correct_points_per_question,
          'poin salah': item.incorrect_points_per_question,
          'skor minimal': item.min_score
        }
      })
    },
    dateFormatToID(dateString) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      }
      const date = new Date(dateString)
      const formattedDate = date.toLocaleDateString('id-ID', options)
      return formattedDate.replace(/,/, '')
    },
    toggleModal() {
      this.modalShow = !this.modalShow
    },
    toggleModalDelete() {
      this.modalDeleteShow = !this.modalDeleteShow
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

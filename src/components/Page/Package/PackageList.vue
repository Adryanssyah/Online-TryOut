<template>
  <Loader v-if="isLoading" />

  <div v-if="!isLoading && packages.length" class="relative overflow-x-auto">
    <div class="pb-1 bg-white dark:bg-gray-900 flex gap-4">
      <div class="px-1">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="table-search"
            class="pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Cari Paket"
            v-model="search"
            @input="handleSearch()"
          />
        </div>
      </div>
      <select
        name="filter"
        id="filter"
        v-model="filter"
        @change="handleFilter()"
        class="block mb-5 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="all">Semua</option>
        <option value="free">Gratis</option>
        <option value="paid">Berbayar</option>
      </select>
    </div>

    <TableData
      :head="['Nama Paket', 'Harga', 'Status', 'Tipe Paket', 'Aksi']"
      title="Paket"
      :isEmpty="filteredPackages.length === 0"
    >
      <tr
        v-for="(item, index) in filteredPackages"
        class="bg-white dark:bg-gray-800 hover:bg-gray-50"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ item.package_name }}
        </th>
        <td class="px-6 py-4 whitespace-nowrap">
          {{
            item.payment_type === 'F'
              ? 'Gratis'
              : `Rp. ${item.price.toLocaleString('id-ID', {
                  StyleSheet: 'currency',
                  currency: 'IDR'
                })}`
          }}
        </td>
        <td class="px-6 py-4">
          <span
            :class="{
              'bg-blue-100 text-blue-800': item.package_status === 'O',
              'bg-red-100 text-red-800': item.package_status === 'C',
              'bg-yellow-100 text-yellow-800': item.package_status === 'M'
            }"
            class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
            >{{
              item.package_status === 'O'
                ? 'Open'
                : item.package_status === 'C'
                ? 'Closed'
                : item.package_status === 'M'
                ? 'Maintenance'
                : ''
            }}</span
          >
        </td>
        <td class="px-6 py-4">{{ item.package_type.package_type_name }}</td>
        <td class="px-6 py-4">
          <router-link
            :to="{ name: 'PackageDetailAdmin', params: { id: item.id } }"
            class="font-medium text-yellow-600 dark:text-yellow-500 hover:underline"
            >Detail</router-link
          >
        </td>
      </tr>
    </TableData>
  </div>

  <nav aria-label="Page navigation example" class="mt-4">
    <ul class="inline-flex -space-x-px text-sm">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >2</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="flex items-center justify-center px-3 h-8 text-yellow-600 border border-gray-300 bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >3</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >4</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >5</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>

  <NotFound v-if="packages.length === 0 && !isLoading && !error" :title="'Paket'" />
  <Disturb v-if="!isLoading && error" @reload="getPackage" />
</template>
<script>
import requestWithBearer from '@/composables/API/RequestWithBearer'
import Loader from '@/components/Loader/Spinner.vue'
import NotFound from '@/components/Error/NotFound.vue'
import Disturb from '@/components/Error/Disturb.vue'
import TableData from '@/components/Table/TableData.vue'
export default {
  components: {
    Loader,
    NotFound,
    Disturb,
    TableData
  },
  data: () => ({
    search: '',
    filter: 'all',
    isLoading: true,
    packages: [],
    filteredPackages: [],
    error: false,
    maxItemPerPage: 1
  }),
  methods: {
    async getPackage() {
      this.isLoading = true
      const response = await requestWithBearer('package', 'GET')
      response.success
        ? ((this.packages = response.data), (this.error = false))
        : (this.error = true)
      this.isLoading = false
      this.filteredPackages = this.packages
    },
    handleFilter() {
      this.filter !== 'all'
        ? (this.filteredPackages = this.packages.filter((item) =>
            this.filter === 'free'
              ? item.payment_type === 'F' &&
                item.package_name.toLowerCase().includes(this.search.toLowerCase())
              : item.payment_type !== 'F' &&
                item.package_name.toLowerCase().includes(this.search.toLowerCase())
          ))
        : ((this.filteredPackages = this.packages), (this.search = ''))
    },
    handleSearch() {
      this.filteredPackages = this.packages.filter((item) =>
        item.package_name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  async mounted() {
    await this.getPackage()
  }
}
</script>

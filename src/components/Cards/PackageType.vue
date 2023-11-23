<template lang="">
  <router-link
    :to="{ name: 'PackageTypeDetail', params: { id: package.id } }"
    class="p-6 group bg-white border border-gray-200 rounded-lg lg:hover:shadow-lg cursor-pointer duration-150 lg:hover:translate-x-1 lg:hover:-translate-y-1 shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-between items-center gap w-full">
      <h5
        class="text-2xl truncate font-bold tracking-tight text-gray-900 group-hover:text-yellow-500 dark:text-white"
      >
        {{ package.package_type_name }}
      </h5>

      <i class="bi bi-chevron-right group-hover:text-yellow-500"></i>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    package: {
      type: Object
    }
  }
}
</script>

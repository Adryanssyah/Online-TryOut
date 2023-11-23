<template lang="">
  <div class="w-full flex items-center justify-center gap-10 flex-col py-5">
    <img src="@/assets/image/empty.svg" alt="empty" class="w-40 h-w-40" />
    <div class="text-center">
      <p class="text-lg mb-2 text-yellow-500 font-semibold">Tidak ada {{ title }}</p>
      <p class="text-sm">klik <strong>"Tambah"</strong> untuk menambahkan {{ title }}!</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang=""></style>

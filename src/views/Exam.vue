<template>
  <WaktuUjian />
  <main class="w-full min-h-screen flex items-start justify-center bg-gray-100">
    <div class="w-full max-w-[1280px] mx-3 lg:mx-0 grid grid-cols-1 lg:grid-cols-12 gap-3 mt-20">
      <NomorSoal />
      <Soal />
    </div>
  </main>
</template>
<script>
import WaktuUjian from '@/components/Ujian/WaktuUjian.vue'
import Soal from '@/components/Ujian/Soal.vue'
import NomorSoal from '@/components/Ujian/NomorSoal.vue'
export default {
  name: 'Exam',
  components: {
    WaktuUjian,
    Soal,
    NomorSoal
  }
}
</script>

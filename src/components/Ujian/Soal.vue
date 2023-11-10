<template lang="">
  <div class="lg:col-span-9 order-1 lg:order-2">
    <header class="flex justify-between">
      <div class="py-3 mb-2 flex flex-col lg:flex-row lg:items-end">
        <h1 class="text-xl text-yellow-500">Try Out CPNS SKD</h1>
        <h2 class="text-sm text-gray-500">/90 Menit/ 100 Soal</h2>
      </div>
      <div class="text-sm lg:flex items-center gap-2 hidden">
        <label for="ukuran-font">Ukuran font:</label>
        <select
          name=""
          id="ukuran-font"
          class="text-sm rounded border-gray-200"
          v-model="ukuranFont"
        >
          <option value="kecil">Kecil</option>
          <option selected value="sedang">Sedang</option>
          <option value="besar">Besar</option>
        </select>
      </div>
    </header>
    <div class="bg-white rounded px-10 py-8 border">
      <div
        class="text-lg"
        :class="{
          'lg:text-base': ukuranFont === 'kecil',
          'lg:text-lg': ukuranFont == 'sedang',
          'lg:text-2xl': ukuranFont === 'besar'
        }"
      >
        <p>
          <strong>100. </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          illum iusto ipsa. Repudiandae laudantium eos et iste veritatis pariatur odit omnis magni
          asperiores animi! Architecto mollitia sapiente consequuntur quo dolore ipsa. Alias quod
          culpa nostrum rerum. Delectus ex, quo eveniet at, quod labore error corporis et earum
          perspiciatis, doloribus modi.
        </p>
        <div class="mt-10">
          <ul>
            <li v-for="(pilihan, index) in pilihanGanda" :key="index" class="mb-3 flex group w-fit">
              <label
                :for="'option-' + pilihan[0]"
                :class="{ 'bg-yellow-300 group-hover:bg-yellow-400 ': pilihan[0] === jawaban[0] }"
                class="w-7 h-7 px-2 py-1 cursor-pointer flex items-center justify-center uppercase group-hover:bg-gray-200 rounded-full border border-black mr-2"
              >
                {{ pilihan[0] }}
              </label>
              <input
                type="radio"
                class="hidden"
                name="jawaban"
                :id="'option-' + pilihan[0]"
                :value="[pilihan[0]]"
                v-model="jawaban"
              />
              <label :for="'option-' + pilihan[0]" class="cursor-pointer">{{ pilihan[1] }}</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 flex lg:justify-between justify-end gap-2 border-t pt-5">
        <button class="px-4 py-2 text-sm border rounded flex gap-2 hover:bg-gray-100 border-black">
          <span>↽</span> <span class="hidden md:block">Sebelumnya</span>
        </button>
        <button class="px-4 py-2 text-sm border rounded flex gap-2 hover:bg-gray-100 border-black">
          <span class="hidden md:block">Selanjutnya</span> <span>⇀</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ukuranFont: 'sedang',
      jawaban: '',
      pilihanGanda: [
        ['A', 'Lorem Ipsum'],
        ['B', 'Ini Jawaban'],
        ['C', 'Silahkan Pilih Salah Satu'],
        ['D', 'Yang merurutmu benar'],
        ['E', 'Siap']
      ]
    }
  }
}
</script>

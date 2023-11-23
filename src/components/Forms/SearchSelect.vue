<script setup>
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'

defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: [Object, String],
  options: Array,
  type: String,
  error: {
    type: [String, Boolean],
    default: false
  }
})

let query = ref('')

let filteredOptions = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((option) =>
        option.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>
<template>
  <Combobox
    :model-value="props.modelValue"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <div class="relative w-full">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Pilih {{ props.type }}</label
      >

      <div
        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white dark:bg-[#202020] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-300 sm:text-sm"
      >
        <ComboboxInput
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-[#202020] dark:border-[#323232] dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          :placeholder="props.type"
          :displayValue="(option) => option.label"
          @change="query = $event.target.value"
          :class="{ 'ring-red-500 border-red-500': error }"
        />
        <ComboboxButton aria-label="btn" class="absolute inset-y-0 right-0 flex items-center pr-2">
          <i class="bi bi-chevron-expand w-5 h-5" aria-hidden="true"></i>
        </ComboboxButton>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#202020] dark:text-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-40"
        >
          <div
            v-if="filteredOptions.length === 0 && query !== ''"
            class="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-white"
          >
            {{ props.type }} tidak ditemukan!
          </div>

          <ComboboxOption
            v-for="option in filteredOptions"
            as="template"
            :key="option.value"
            :value="option"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4"
              :class="{
                'bg-yellow-600 text-white': active,
                'text-gray-900 dark:text-white': !active
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-white': active, 'text-yellow-600': !active }"
              >
                <i class="bi bi-check-lg h-5 w-5" aria-hidden="true"></i>
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
      <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
    </div>
  </Combobox>
</template>

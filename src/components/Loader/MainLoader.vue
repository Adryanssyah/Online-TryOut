<template>
  <div
    v-if="visible"
    class="w-full min-h-screen flex items-center justify-center relative bg-white"
  >
    <div class="flex items-center">
      <img src="/icon.svg" class="h-8 mr-3" alt="FlowBite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >TryoutKu</span
      >
    </div>

    <p class="absolute bottom-14 left-1/2 -translate-x-1/2 text-sm">
      by <strong>Bee Media</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainLoader',
  props: {
    visible: Boolean
  }
}
</script>

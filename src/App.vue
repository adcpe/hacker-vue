<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavigationComp from './components/NavigationComp.vue'
</script>

<template>
  <main class="w-10/12 xl:w-3/4 bg-zinc-200 my-0 mx-auto">
    <NavigationComp class="flex flex-row justify-between bg-violet-500 text-zinc-200 px-6" />
    <div class="my-1">
      <RouterView :key="useRoute().path" />
    </div>
  </main>
</template>

<style scoped></style>

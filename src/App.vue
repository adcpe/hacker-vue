<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navigation from './components/NavigationComp.vue'
import Footer from './components/FooterComp.vue'
</script>

<template>
  <main class="w-full xl:w-3/4 bg-zinc-200 my-0 mx-auto">
    <Navigation class="flex flex-row justify-between bg-violet-500 text-zinc-200 px-6" />
    <div class="my-1">
      <RouterView :key="useRoute().path" />
    </div>
    <Footer />
  </main>
</template>

<style scoped></style>

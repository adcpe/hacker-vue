<script setup>
import { RouterView } from 'vue-router'
import NavigationComp from './components/NavigationComp.vue'
</script>

<template>
  <main class="w-3/5 bg-zinc-200 my-0 mx-auto">
    <NavigationComp @changePage="(n) => this.activePage = n" />
    <RouterView />
  </main>
</template>

<style scoped></style>

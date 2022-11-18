<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'

const user = ref({})
const route = useRoute()

getData(route.params.id, 'user').then((res) => (user.value = res))
</script>

<template>
  <div class="min-h-[25vh] bg-zinc-300 p-4">
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">User:</div>
      <div>{{ user.id }}</div>
    </div>
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">Created:</div>
      <div>{{ user.created }}</div>
    </div>
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">Karma:</div>
      <div>{{ user.karma }}</div>
    </div>
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">About:</div>
      <div v-html="user.about"></div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'
import { timePassed, convertUnixTime } from '../utils/time'

const user = ref({
  created: '',
  id: '',
  karma: '',
  about: ''
})
const route = useRoute()

async function initData(resource) {
  await getData(resource, 'user').then((res) => (user.value = res))
}

onBeforeMount(() => initData(route.params.id, 'user'))
</script>

<template>
  <div class="min-h-[25vh] bg-violet-50 p-4">
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">User:</div>
      <div>{{ user.id }}</div>
    </div>
    <div class="flex flex-row my-2">
      <div class="font-bold w-20">Created:</div>
      <div v-if="user.created !== ''">
        {{ convertUnixTime(user.created) }} ({{ timePassed(user.created) }} ago)
      </div>
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

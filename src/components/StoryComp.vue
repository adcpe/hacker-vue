<script setup>
import { RouterLink } from 'vue-router'
import { host, timePassed } from '../utils/time'
const props = defineProps(['item'])
// console.log('host(item.url)')
// console.log(host(item.url))
</script>

<template>
  <li class="flex flex-row bg-zinc-300 py-3 border-b-zinc-200 border-b text-lg">
    <div class="flex items-center justify-center w-24 text-violet-500 font-medium">
      <span v-if="item.type !== 'job'" class="score">{{ item.score }}</span>
    </div>
    <div>
      <span class="flex flex-row">
        <div>
          <a :href="item.url ? item.url : '/item/' + item.id">{{ item.title }}</a>
        </div>
        <div>
          <span class="ml-2 text-sm opacity-40 leading-3">
            {{ item.url ? host(item.url) : '' }}
          </span>
        </div>
      </span>
      <span class="opacity-50">
        <span v-if="item.type !== 'job'">
          by <RouterLink class="underline" :to="'/user/' + item.by">{{ item.by }}</RouterLink> |
        </span>
        {{ timePassed(item.time) }} ago
        <span v-if="item.type !== 'job'">
          <span> | </span>
          <RouterLink class="underline" :to="'/item/' + item.id">
            {{ item.descendants }} comments
          </RouterLink>
        </span>
      </span>
    </div>
  </li>
</template>

<style scoped>
/* li {
  background-color: #e5e5e550;
  text-align: left;
  padding-left: 5rem;
  margin: 1px auto;
  list-style: none;
} */
</style>

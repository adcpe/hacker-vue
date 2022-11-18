<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['getNews'])

const listItems = [
  {
    name: 'New',
    resource: 'newstories',
    to: 'new'
  },
  {
    name: 'Top',
    resource: 'topstories',
    to: 'top'
  },
  {
    name: 'Best',
    resource: 'beststories',
    to: 'best'
  },
  {
    name: 'Ask',
    resource: 'askstories',
    to: 'ask'
  },
  {
    name: 'Show',
    resource: 'showstories',
    to: 'show'
  },
  {
    name: 'Jobs',
    resource: 'jobstories',
    to: 'jobs'
  }
]
</script>

<template>
  <nav>
    <div class="flex flex-row items-center cursor-pointer text-2xl font-semibold">
      <RouterLink :to="'/'">
        <h1>Hacker Vue</h1>
      </RouterLink>
    </div>
    <div>
      <ul class="list-none flex flex-row items-center h-12 text-xl font-medium">
        <li v-for="(item, i) in listItems" :key="i" class="mx-2">
          <RouterLink :to="item.to">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
const props = defineProps(['getNews'])

const fullPath = useRoute().fullPath

const listItems = [
  {
    name: 'new',
    resource: 'newstories',
    to: '/new'
  },
  {
    name: 'top',
    resource: 'topstories',
    to: '/top'
  },
  {
    name: 'best',
    resource: 'beststories',
    to: '/best'
  },
  {
    name: 'ask',
    resource: 'askstories',
    to: '/ask'
  },
  {
    name: 'show',
    resource: 'showstories',
    to: '/show'
  },
  {
    name: 'jobs',
    resource: 'jobstories',
    to: '/jobs'
  }
]
</script>

<template>
  <nav>
    <div class="flex flex-row items-center cursor-pointer text-2xl font-semibold">
      <a :href="fullPath">
        <h1>Hacker Vue</h1>
      </a>
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

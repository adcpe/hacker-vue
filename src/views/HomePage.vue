<script setup>
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'
import StoryItem from '../components/StoryItem.vue'

const items = reactive([])

const resources = {
  '/': 'topstories',
  '/new': 'newstories',
  '/best': 'beststories',
  '/ask': 'askstories',
  '/show': 'showstories',
  '/jobs': 'jobstories'
}

async function initData(resource) {
  await getData(resource).then((res) => {
    const stories = res.slice(0, 25)
    stories.forEach(async (item) => {
      await getData(item, 'item').then((res) => {
        items.push(res)
      })
    })
  })
}

onBeforeMount(() => initData(resources[useRoute().path]))
</script>

<template>
  <ul>
    <StoryItem v-for="(item, i) in items" :key="i" :item="item" />
  </ul>
</template>

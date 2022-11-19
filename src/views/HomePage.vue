<script setup>
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'
import StoryItem from '../components/StoryItem.vue'

const items = reactive([])

const resources = {
  '/': 'topstories',
  '/top': 'topstories',
  '/new': 'newstories',
  '/best': 'beststories',
  '/ask': 'askstories',
  '/show': 'showstories',
  '/jobs': 'jobstories'
}

async function initData(resource) {
  console.log('zero')
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
  <div>
    <ul>
      <StoryItem v-for="(item, i) in items" :key="i" :item="item" />
    </ul>
  </div>
</template>

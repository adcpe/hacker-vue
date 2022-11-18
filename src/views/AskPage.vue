<script setup>
import StoryComp from '../components/StoryComp.vue'
import { reactive } from 'vue'
import { getData } from '../utils/api'

const items = reactive([])

getData('askstories').then((res) => {
  const stories = res.slice(0, 30)

  stories.forEach((item) => {
    getData(item, 'item').then((res) => {
      items.push(res)
    })
  })
})
</script>

<template>
  <div>
    <ul>
      <StoryComp v-for="(item, i) in items" :key="i" :item="item" />
    </ul>
  </div>
</template>

<style scoped></style>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'
import Parent from '../components/StoryPageParent.vue'
import CommentsSection from '../components/CommentsSection.vue'

const story = ref({
  by: '',
  descendants: '',
  id: '',
  kids: [],
  score: '',
  text: '',
  time: '',
  title: '',
  type: 'story'
})

async function initData(resource) {
  await getData(resource, 'item').then((res) => (story.value = res))
}

onBeforeMount(() => initData(useRoute().params.id, 'item'))
</script>

<template>
  <Parent :story="story" />
  <CommentsSection :kids="story.kids" />
</template>

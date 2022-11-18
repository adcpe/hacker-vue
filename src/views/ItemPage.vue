<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '../utils/api'
import ParentItem from '../components/ItemPageParentItem.vue'

const route = useRoute()
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

getData(route.params.id, 'item').then((res) => (story.value = res))
</script>

<template>
  <ParentItem :story="story" />
</template>

<style lang="scss" scoped></style>

<script setup>
import { RouterLink } from 'vue-router'
import { timePassed } from '../utils/time'

const props = defineProps(['story'])
</script>

<template>
  <div class="bg-violet-50 px-6 py-4">
    <h1 class="text-2xl font-bold">
      <a class="story-link" :href="story.url" target="_blank" rel="noopener noreferrer">
        {{ story.title }}
      </a>
    </h1>
    <div class="mt-1 mb-3 opacity-50">
      {{ story.score }} points | by
      <RouterLink class="underline" :to="'/user/' + story.by">{{ story.by }}</RouterLink> |
      {{ timePassed(story.time) }} ago | {{ story.descendants }} comments
    </div>
    <p class="text-lg" v-html="story.text" />
  </div>
</template>

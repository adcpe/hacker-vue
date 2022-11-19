<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getData } from '../utils/api'
import { timePassed } from '../utils/time'
import Comment from './CommentComp.vue'

const props = defineProps(['kid'])

const comment = ref({})

getData(props.kid, 'item').then((res) => {
  comment.value = res
})
</script>

<template>
  <div class="py-2">
    <div class="opacity-50 mb-2">
      <RouterLink class="underline" :to="'/user/' + comment.by">{{ comment.by }}</RouterLink>
      {{ ' ' }}
      {{ timePassed(comment.time) }} ago
    </div>
    <p class="mb-2 text-lg leading-relaxed" v-html="comment.text" />
    <div class="ml-8" v-for="ck in comment.kids">
      <Comment :kid="ck" />
    </div>
  </div>
</template>

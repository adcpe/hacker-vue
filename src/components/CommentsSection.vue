<script setup>
import Comment from './CommentComp.vue'

const props = defineProps(['kids'])
</script>

<template>
  <div class="bg-violet-50 my-1 px-6">
    <Comment v-for="kid in kids" :kid="kid" />
  </div>
</template>

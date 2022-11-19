<script setup>
import Comment from './CommentComp.vue'

const props = defineProps(['kids'])
</script>

<template>
  <div class="bg-zinc-300 my-1 px-6">
    <Comment v-for="kid in kids" :kid="kid" />
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { RouterLink } from 'vue-router'
import { host, timePassed } from '../utils/time'
const props = defineProps(['item'])
</script>

<template>
  <li class="flex flex-row bg-violet-50 py-3 border-b-zinc-200 border-b text-lg">
    <table>
      <tbody>
        <tr>
          <td
            class="align-middle text-center justify-center w-20 text-violet-500 text-base xl:text-xl">
            <span v-if="item.type !== 'job'" class="score">{{ item.score }}</span>
          </td>
          <td>
            <span class="flex flex-row text-lg">
              <div>
                <a class="story-link" :href="item.url ? item.url : '/item/' + item.id">
                  {{ item.title }}
                </a>
                <span class="ml-2 text-sm opacity-40 leading-3">
                  {{ item.url ? host(item.url) : '' }}
                </span>
              </div>
            </span>

            <span class="text-base opacity-50">
              <span v-if="item.type !== 'job'">
                by
                <RouterLink class="underline" :to="'/user/' + item.by">{{ item.by }}</RouterLink> |
              </span>
              {{ timePassed(item.time) }} ago
              <span v-if="item.type !== 'job'">
                <span> | </span>
                <RouterLink class="underline" :to="'/item/' + item.id">
                  {{ item.descendants }} comments
                </RouterLink>
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </li>
</template>

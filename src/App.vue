<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <a-button
      type="primary"
      @click="count++"
    >
    count is {{ count }}
    </a-button>
    <h1 class="text-3xl font-bold underline mt-5">hello world</h1>
  </div>
</template>

<style scoped>
</style>

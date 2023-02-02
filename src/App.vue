<script setup lang="ts">
import useCounter from './store/modules/counter'

const counterStore = useCounter()

</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <a-button
      type="primary"
      status="danger"
      @click="counterStore.decrement()"
    >
      decrement
    </a-button>
    <h1 class="text-3xl font-bold mx-5">count is {{ counterStore.count }}</h1>
    <h2 class="text-3xl font-bold mx-5">double is {{ counterStore.double }}</h2>
    <a-button
      type="primary"
      status="success"
      @click="counterStore.increment()"
    >
      decrement
    </a-button>
  </div>
</template>

<style scoped>
</style>

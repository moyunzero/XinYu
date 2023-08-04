<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
  <div class="xinyu">
    <LayoutHeader/>
    <RouterView />
    <LayoutFooter />
  </div>
</template>

<style scoped>
</style>

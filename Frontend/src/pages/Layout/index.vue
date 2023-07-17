<script setup>
import LayoutHeader from './components/LayoutHeader.vue'

import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
  <div>
    <LayoutHeader />

    <RouterView />

    <LayoutFooter />
  </div>
</template>

<style>
</style>

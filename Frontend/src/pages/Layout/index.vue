<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
    <LayoutHeader/>
    <RouterView />
    <LayoutFooter />
</template>

<style scoped>
</style>

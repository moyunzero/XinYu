<script setup>
import { ref, computed } from 'vue';
const currentPage = ref(1);
const itemsPerPage = 10;
const totalItems = 100;
const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.from({ length: itemsPerPage }, (_, index) => startIndex + index + 1);
});
function handleCurrentChange(newPage) {
  currentPage.value = newPage;
}
</script>

<template>
  <div class="container">
    <el-card class="box-card">
      <div v-for="item in displayedItems" :key="item" class="text item">{{ 'List item ' + item }}</div>
    </el-card>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="totalItems"
      :page-size="itemsPerPage"
      v-model="currentPage"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped>
.container {
  width:80vw;
  margin:20px auto;
}
.item{
  height:300px;
}
</style>
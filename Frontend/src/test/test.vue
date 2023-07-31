<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const orderApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
});


    const articles = reactive([]);

    onMounted(async () => {
      try {
        const response = await orderApi.get('/articles');
        articles.value = response.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    });


</script>
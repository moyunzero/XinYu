<script setup>
import { ref, computed,onMounted } from 'vue';
import { getArticleApi } from '@/apis/article';

const currentPage = ref(1);
const itemsPerPage = 10;
const totalItems = ref(0);
const articleList = ref([]);

const getList = async()=>{
  const res = await getArticleApi();
  articleList.value = res;
  totalItems.value = Math.ceil(articleList.value.length / itemsPerPage);
};

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return articleList.value.slice(startIndex, endIndex);
});

function handleCurrentChange(newPage) {
  currentPage.value = newPage;
}

onMounted( 
  async()=>{ await getList();
});
</script>

<template>
  <div class="container">
    <h2>心理阅读</h2>
    <div class="article-box" >
      <div class="article-card" v-for="item in displayedItems" :key="item.id" lazy>
        <el-image
          :src='item.img'
          class="image"
       
        />
        <div class="content">
        <RouterLink to="/noinfo">
          <div class="title">{{ item.title }}</div>
        </RouterLink>
          <div class="info">{{item.content}}</div>
          <div class="bottom">
            <div class="author">匿名</div>
            <div class="label">#{{ item.label}}</div>
          </div>
        </div>
      </div>  
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="totalItems"
      :page-size="itemsPerPage"
      v-model:current-page="currentPage"
      @current-change="handleCurrentChange"
  />
  </div>

</template>

<style scoped lang="scss">
.container {
  width:70vw;
  margin:20px auto;
  padding: 0 20px;
  .page{
    margin: 15px 0;
    justify-content: center;
  }
}
h2{
  padding: 10px 0 5px 0;
}
.article-box{
  width: 100%;
  border: 0.5px solid #ccc;
  border-radius: 15px;
  .article-card{
    display: flex;
    width: 100%;
    padding: 20px;
    .content{
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content:space-between;
      .title{
        font-weight: bolder;
        font-size: 18px;
      }
      .info{
        color: #666;
      }
      .bottom{
        display: flex;
        justify-content: space-between;
        .author{
          font-weight: bold;
          color:#999;
        }
        .label{
            padding: 2px;
            border-radius: 5px;
            color: #999;
            background-color: #f1f5f9;
          }
      }
    }
  }
}

.image {
  width: 200px;
  border-radius: 10px;
  margin-right: 20px;
}

</style>
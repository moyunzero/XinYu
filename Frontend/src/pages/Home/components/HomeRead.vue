<script setup>
import { ref, onMounted } from 'vue';
import { getArticleApi } from '@/apis/article';

const articleList = ref([]);
const getList = async()=>{
  const res = await getArticleApi();
  articleList.value =  res.slice(0,3);
}

onMounted( ()=>getList())
</script>


<template>
  <div class="container">
    <el-row >
      <el-col :span="24">
        <div class="grid-content ">精选阅读</div>
      </el-col>
    </el-row>
    <el-row class="card-content">
        <el-col
          v-for=" (item,index) in articleList"
          :key="index"
          :span="6"
          
          >
          <el-card shadow="hover" class="card">
            <img
              :src="item.img"
              class="image"
            />
            <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.content }}</div>
              <div class="bottom">
                <RouterLink to="/noinfo">暂无全文</RouterLink>
                <div class="label">#{{item.label}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 80vw;
  margin: 50px auto;
  .grid-content{
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-bottom: 20px;
    min-height: 36px;
    font-size: 24px;
  }
  .card-content{
    display: flex;
    margin-top: 10px;    
    justify-content: space-around;
    .card{
      border-radius: 20px;
      .info{
        padding-top: 10px;
        .title{
          margin-bottom: 10px;
          font-weight: bolder;
        }
        .content{
            color:#666;
          }
        .bottom {
          margin-top: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
}
.image {
  width: 100%;
  display: block;
  border-radius: 10px;
}

</style>
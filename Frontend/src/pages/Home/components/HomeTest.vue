<script setup>
import  { getTestApi }from '@/apis/test';
import { onMounted ,ref } from 'vue';

const mentalList = ref([]);
const getList = async()=>{
  const res = await getTestApi();
  mentalList.value =  res;
}

onMounted( ()=>getList() )
</script>

<template>
  <div class="container">
    <el-row >
      <el-col :span="24">
        <div class="grid-content ">心理自测</div>
      </el-col>
    </el-row>
    <el-row justify="space-evenly" class="card-content">
      <el-col
        v-for=" item in mentalList"
        :key="item.id"
        :span="5"
        >
        <el-card shadow="hover" class="card">
          <img
            :src="item.image"
            class="image"
          />
          <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.info }}</div>
              <div class="bottom">
                <RouterLink to="/noinfo">暂无全文</RouterLink>
                <div class="label">免费</div>
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
    margin-bottom: 30px;
    justify-content: center;  
    min-height: 36px;
    font-size: 24px;
  }
  .card-content{
    margin-top: 10px;      
    .card{
      height: 250px;
      border-radius: 20px;
    } 
  }
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
            color: rgb(240, 12, 12,0.9);
            background-color: #f1f5f9;
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
<script setup>
import { ref, onMounted } from 'vue';
import { getOrderApi } from '@/apis/order';

const orderList = ref([]);

const getList = async()=>{
  const res = await getOrderApi();
  orderList.value =  res;
}

onMounted(()=>getList())
</script>

<template>
    <div class="header">
      <h1>关于心理咨询</h1>
    </div>
    <el-row class="orderbt">
      <el-button type="primary">了解咨询</el-button>
      <el-button type="primary">预约咨询</el-button>
      <el-button type="primary">进行咨询</el-button>
    </el-row>
    <div class="order-1">
      <h2>了解咨询</h2>
    </div>
    <div class="content" >
      <el-card v-for="(item, index) in orderList" :key="index" :body-style="{ padding: '0px' }">
        <el-image 
          :src= "item.img"
          class="image"
        />
        <div style="padding: 14px">
          <div >
              {{ item.title }}
          </div>
          <p>{{ item.content }}</p>
          <div class="bottom">
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </div>
</template>

<style scoped lang="scss">
h1{
  margin: 20px 0 ;
  text-align: center;
  color:#595A5C;
}
.orderbt{
  display: flex;
  margin: 10px 0 ;
  justify-content: center;
}
h2{
  color: #409eff;
  padding-top: 10px;
}

.content{
  width: 20vw;
  p{
    word-wrap: break-word;
  }
}

.card{
  width: 10vw;
  // overflow:auto
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
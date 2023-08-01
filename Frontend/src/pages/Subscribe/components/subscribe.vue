<script setup>
import { ref, onMounted } from 'vue';
import { getOrderApi,getOrderApi2,getOrderApi3 } from '@/apis/order';

const orderList = ref([]);
const orderList2 = ref([]);
const orderList3 = ref([]);

const getList = async()=>{
  const res = await getOrderApi();
  orderList.value =  res;
}
const getList2 = async()=>{
  const res = await getOrderApi2();
  orderList2.value =  res;
}
const getList3 = async()=>{
  const res = await getOrderApi3();
  orderList3.value =  res;
}


onMounted(async () => {
    await getList();
    await getList2();
    await getList3();
  })
</script>

<template>
    <div class="header">
      <h1>关于心理咨询</h1>
    </div>
    <el-row class="orderbt">
        <el-link href="#order-1"><el-button type="primary">了解咨询</el-button> </el-link>
        <el-link href="#order-2"><el-button type="primary">预约咨询</el-button> </el-link>
        <el-link href="#order-3"><el-button type="primary">进行咨询</el-button> </el-link>
    </el-row>
    <div class="order-content">
      <div class="order" id="order-1">
        <h2 >了解咨询</h2>
          <div class="card">
            <el-card class="cd" v-for="(item, index) in orderList" :key="index" shadow="hover">
              <el-image 
                :src= "item.img"
                class="image"
              />
              <div class="card-content">
                <div class="card-title" >
                    {{ item.title }}
                </div>
                <p>{{ item.content }}</p>
                <div class="bottom">
                  <el-button text class="button">暂无全文</el-button>
                </div>
              </div>
            </el-card>
        </div>
      </div>
      <div class="order" id="order-2" >
        <h2 >预约咨询</h2>
        <div class="card" >
          <el-card class="cd" v-for="(item, index) in orderList2" :key="index"  shadow="hover">
            <el-image 
              :src= "item.img"
              class="image"
            />
            <div class="card-content">
              <div class="card-title" >
                  {{ item.title }}
              </div>
              <p>{{ item.content }}</p>
              <div class="bottom">
                <el-button text class="button">暂无全文</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="order" id="order-3">
        <h2 >进行咨询</h2>
        <div class="card" >
          <el-card class="cd" v-for="(item, index) in orderList3" :key="index"  shadow="hover">
            <el-image 
              :src= "item.img"
              class="image"

            />
            <div class="card-content">
              <div class="card-title" >
                  {{ item.title }}
              </div>
              <p>{{ item.content }}</p>
              <div class="bottom">
                <el-button text class="button">暂无全文</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
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
.el-link {
   margin: 0 10px;
}
h2{
  color: #409eff;
  padding-top: 10px;
}

.card{
  column-count:3;
  column-gap: 20px;
  .cd{ 
    display:flex;
    margin-bottom: 10px;
    .card-title{
      color: #3872ad;
      padding:10px 0;
      font-size:18px;
    }
    .image{
      border-radius: 8px;
    }
    p{
    color: #848484;
    word-wrap: break-word;
    }
  }
 
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

.order-content{
  margin-bottom: 30px;
}
</style>
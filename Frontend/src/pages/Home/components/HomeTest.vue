<script setup>
import  httpMental  from '@/utils/mental';
import { onMounted ,ref} from 'vue';
const mentalList = ref([]);

const getMentalList = async()=>{
  const params = {
    method:'get',
    do:'list',
  }
  const res = await httpMental('',{params});
  mentalList.value = res.data;
}

onMounted(()=>getMentalList())
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
        v-for=" item in mentalList.slice(99,103)"
        :key="item.id"
        :span="5"
        >
        <el-card shadow="hover" class="card">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <div>{{ item.name }}</div>
            <!-- <div>{{ item.id }}</div> -->
            <div>
              <a href="#">查看更多</a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">.container{
  width: 80vw;
  margin: 20px auto;
  .grid-content{
    display: flex;
    align-items: center;
    justify-content: center;  
    min-height: 36px;
    font-size: 24px;
  }
  .card-content{
    margin-top: 10px;      
    .card{
      border-radius: 20px;
    } 
  }
}
.image {
  width: 100%;
  display: block;
  border-radius: 10px;
}

</style>
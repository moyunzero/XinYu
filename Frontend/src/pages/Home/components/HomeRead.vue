<script setup>
</script>


<template>
  <div class="container">
    <el-row >
      <el-col :span="24">
        <div class="grid-content ">精选阅读</div>
      </el-col>
    </el-row>
    <el-row justify="space-evenly" class="card-content">
      <el-col
        v-for=" o in 3"
        :key="o"
        :span="6"
        
        >
        <el-card shadow="hover" class="card">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <div>标题</div>
            <div>内容</div>
            <div>
              <a href="#">查看更多</a>
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
  margin: 10px auto;
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
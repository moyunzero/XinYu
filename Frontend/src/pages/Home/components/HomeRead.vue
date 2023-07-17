<script setup>
</script>


<template>
  <div class="container">
    <el-row >
      <el-col :span="24">
        <div class="grid-content ">精选文章</div>
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
    background-color: blue;
    border-radius: 4px;
    min-height: 36px;
  }
}

</style>
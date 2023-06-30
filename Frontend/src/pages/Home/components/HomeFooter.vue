<script setup>
</script>

<template>
  <div class="container">
    <!-- 联系方式部分 -->
    <div class="contact">
      <div class="logo">
        <img src="@/assets/xinyu.png" />
      </div>
    </div>
    <el-divider direction="vertical" />
    <!-- 关于 -->
    <div class="about">
      <dl>
        <dt>术语 1</dt>
        <dd>术语 1的定义</dd>
        
        <dt>术语 2</dt>
        <dd>术语 2的定义</dd>
        
        <dt>术语 3</dt>
        <dd>术语 3的定义</dd>
      </dl>
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-around;
  width:80vw;
  padding: 10px 0;
  margin: 0 auto;
  .logo img{
    width: 60px;
  }
}
</style>
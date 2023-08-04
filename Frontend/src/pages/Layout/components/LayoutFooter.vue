<script setup>
</script>

<template>
  <div class="container">
    <!-- 联系方式部分 -->
    <div class="contact">
      <div class="email">
        <i class="iconfont icon-email"></i>
        <el-link  :underline="false">z305747648@163.com</el-link> 
      </div>
      <div class="email">
        <i class="iconfont icon-github"></i>
        <el-link  :underline="false" href="https://github.com/moyunzero/XinYu" target="_blank">https://github.com/moyunzero/XinYu</el-link> 
      </div>
    </div>
    <div class="message">
      <ul>
        <li><a> 预约咨询 </a></li>
        <li><a> 常见问题 </a></li>
        <li><a> 社区资源 </a></li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <li>
          <a>关于我们</a>
        </li>
        <li>
          <a>加入我们</a>
        </li>
        <li>
          <a>免责声明</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  display: flex;
  width:80vw;
  height: 150px;
  padding: 10px 0;
  margin: 0 auto;
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 2% 0;

  .email{
    padding-left:20%;
    margin-bottom: 2%;
  }
}

.message{
  display: flex;
  flex: 1;
  padding: 2% 0;
  justify-content: center;
}

.about{
  display:flex;
  flex: 1;
  padding: 2% 0;
  justify-content: center;
}

ul li a{
  display: block;
  padding-bottom: 10px;
}
.email i::before {
  vertical-align: middle;
  margin-right: 10px;
}
</style>
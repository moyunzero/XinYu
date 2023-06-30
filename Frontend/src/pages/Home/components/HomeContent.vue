<script setup>

</script>

<template>
  <div class="block text-center" style="height: 300px">
    <el-carousel class="carousel" height="300px" autoplay interval="3000">
      <el-carousel-item >
        <h3 class="small justify-center" text="2xl">height 100px</h3>
      </el-carousel-item>
      <el-carousel-item >
        <h3 class="small justify-center" text="2xl">height 200px</h3>
      </el-carousel-item>
      <el-carousel-item >
        <h3 class="small justify-center" text="2xl">height 300px</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>

.carousel {
  margin:  0 10vw;
}
.carousel-item {
  color: #475669;
  opacity: 0.75;
  text-align: center;
  margin: 0 100px;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    display: flex;
    align-items: center;
    margin: 0;
    text-align: center;
    height: 100%;
  }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

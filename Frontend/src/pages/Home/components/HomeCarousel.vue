<script setup>

</script>

<template>
  <div class="carousel">
    <el-carousel class="carousel" height="500px" autoplay interval="3000">
      <el-carousel-item >
        <img class="car-img" src="@/assets/one.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img class="car-img" src="@/assets/two.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img class="car-img" src="@/assets/three.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">

.carousel {
  margin:  20px 5vw;
}
.car-img{
  width: 100%;
  height: 100%;
  object-fit:fill;
}
</style>

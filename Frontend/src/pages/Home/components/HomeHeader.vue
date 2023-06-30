<script lang ="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

//Dialog弹出对话框
const dialogVisible = ref(false)
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

</script>

<template>
  <el-affix :offset="0">
    <el-row class="header" >
      <el-col :span="1"  class="logo">
        <img src="@/assets/xinyu.png" alt="心语" class="image-size" >
      </el-col>
      <el-col :span="18" class="menu">
        <ul >
          <li>
            <a href= "javaScript:">首页</a>
          </li>
          <li> 
            <a href= "javaScript:">心灵阅读</a>
          </li>
          <li>
            <a href= "javaScript:">心理自测</a>
          </li>
          <li>
            <a href= "javaScript:">预约咨询</a>
          </li>
          <li>
            <a href= "javaScript:">树洞</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="3" class="login">
        <el-button  text @click="dialogVisible = true">登录/注册</el-button>
      </el-col>
    </el-row>
  </el-affix>
  <!-- 未修改 -->
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  width: 80vw;
  margin: 0 auto;
  background-color: white;  
  .logo{
    display: flex;
    img{
      width: 60px;
      height: 60px;
    }
  }
}
.menu {
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
    ul{
      display: flex;
      justify-content: space-between;
      height: 60px;  
      align-items: center;
      li{
        height: 60px;  
        align-items: center;
        flex-grow: 1;
       &:hover{
          border-bottom: 3px solid #99CCFF;
          a{
            color: #99CCFF;
          }  
        }
        a{
          display: flex;
          height: 60px;
          padding: 10px 10px;
          justify-content: center; /* 水平居中 */
          align-items: center; /* 垂直居中 */
          color: black;
        }  
      
    }  
  }
  
}
.login  {
  display: flex;
  justify-content: flex-end; /* 水平居中 */
  align-items: center; /* 垂直居中 */   
  height:60px;
  // margin: 0 10px;
}


</style>

<script lang ="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

//Dialog弹出对话框
const dialogVisible = ref(false)
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('功能未实现')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

</script>

<template>
    <div class="container">
      <el-affix :offset="0" class="fixed">
          <el-row class="header" >
            <el-col :span="1"  class="logo">
              <img src="@/assets/xinyu.png" alt="心语" class="image-size" >
            </el-col>
            <el-col :span="18" class="menu">
              <ul >
                <li>
                  <RouterLink to="/">首页</RouterLink>
                </li>
                <li> 
                  <RouterLink to="/article">心灵阅读</RouterLink>
                </li>
                <li>
                  <RouterLink to="/test">心灵自测</RouterLink>
                </li>
                <li>
                  <RouterLink to="/subscribe"><a>预约咨询</a></RouterLink>
                </li>
                <li>
                  <RouterLink to="/Treehole"><a>树洞</a></RouterLink>
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
        title="登录/注册"
        width="30%"
        :before-close="handleClose"
      >
        <span>功能未实现</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
</template>


<style scoped lang="scss">
.container{
  margin-top: 10px;
}
.header{
  width: 80vw;
  margin: 10px auto;  
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

</style>

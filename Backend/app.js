// 导入 express 模块
const express = require('express');

// 创建 express 的服务器实例
const app = express();

// 导入 cors 中间件
const cors = require('cors');

// 解析表单数据中间件
app.use(express.urlencoded({ extended: false }))

// 将cors注册为全局中间件
app.use(cors());

// 封装res.cc函数
app.use((req,res,next) => {
  //status默认值为1，表示失败的情况
  //err的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = (err,status = 1) => {
      res.send({
          status,
          //判断err的值是对象还是字符串
          message:err instanceof Error ? err.message : err
      })
  }
  next()
})

// 导入 路由模块 
const userRouter = require('./route/user')
// 注册路由模块
app.use('/api',userRouter)



//定义错误级别的中间件
app.use((err,req,res,next) => {
  //数据验证失败
  if(err instanceof joi.ValidationError) return res.cc(err)
  //身份认证失败
  if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  //未知的错误
  res.cc(err)
})

// 调用app.listen() 方法，指定端口号并启动web服务器
app.listen(3007,()=>{
  console.log('listening on http://localhost:3007');
})
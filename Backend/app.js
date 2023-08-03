// // 导入 express 模块
// const express = require('express');

// // 创建 express 的服务器实例
// const app = express();

// // 导入 cors 中间件
// const cors = require('cors');
// const path = require('path')
// // 解析表单数据中间件
// app.use(express.urlencoded({ extended: false }))

// // 将cors注册为全局中间件
// app.use(cors());

// // 封装res.cc函数
// app.use((req,res,next) => {
//   //status默认值为1，表示失败的情况
//   //err的值，可能是一个错误对象，也可能是一个错误的描述字符串
//   res.cc = (err,status = 1) => {
//       res.send({
//           status,
//           //判断err的值是对象还是字符串
//           message:err instanceof Error ? err.message : err
//       })
//   }
//   next()
// })

// // 导入 路由模块 
// const fileRouter = require('./route/files')
// const shudongRouter = require('./route/shudong')
// const fs = require('fs')
// // 递归创建路径
// const mkdirs = (dirpath) => {
//     console.log(path.dirname(dirpath))
//     if (!fs.existsSync(path.dirname(dirpath))) {
//         mkdirs(path.dirname(dirpath))
//     }
//     fs.mkdirSync(dirpath)
//     console.log('路径创建成功')
// }
// let img_dir = path.join(__dirname, './assets/wallimgs/')
// fs.existsSync(img_dir) == false ? mkdirs(img_dir) : console.log('路径已经存在')
// app.use('/assets/wallimgs',express.static(path.join(__dirname,'./assets/wallimgs')))

// // 注册路由模块
// app.use('/walls',shudongRouter)
// app.use('/walls',fileRouter)


// //定义错误级别的中间件
// app.use((err,req,res,next) => {
//   //数据验证失败
//   if(err instanceof joi.ValidationError) return res.cc(err)
//   //身份认证失败
//   if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
//   //未知的错误
//   res.cc(err)
// })

// // 调用app.listen() 方法，指定端口号并启动web服务器
// app.listen(3007,()=>{
//   console.log('listening on http://localhost:3007');
// })
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const sdfileApi = require('./route/files')
const shudongApi = require('./route/shudong')
const orderApi  = require('./route/order')
const articleApi = require('./route/article')
const testApi = require('./route/test')


const app = express()
const fs = require('fs')

// 递归创建路径
const mkdirs = (dirpath) => {
    console.log(path.dirname(dirpath))
    if (!fs.existsSync(path.dirname(dirpath))) {
        mkdirs(path.dirname(dirpath))
    }
    fs.mkdirSync(dirpath)
    console.log('路径创建成功')
}
var img_dir = path.join(__dirname, './assets/wallimgs/')
fs.existsSync(img_dir) == false ? mkdirs(img_dir) : console.log('路径已经存在')
app.use('/assets/wallimgs',express.static(path.join(__dirname,'./assets/wallimgs')))

//配置跨域
app.all('*',(req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')

    //返回json
    res.header('Content-Type','application/json;charset=utf-8')
    if(req.method == 'OPTIONS'){
        //让options请求快速返回
        res.sendStatus(200)
    }else{
        next()
    }
})

//加入html视图
app.engine('html',ejs.__express)
app.set('view engine','html')

//解析前端数据
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

//引入路由
app.use('/walls',shudongApi)
app.use('/walls',sdfileApi)
app.use('/order',orderApi)
app.use('/article',articleApi)
app.use('/test',testApi)



app.listen(3000,() => {
    console.log(`我启动了端口3000`)
})
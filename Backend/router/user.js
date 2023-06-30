// 导入数据库模块
const db = require('../db/index');
// 导入bcryptjs密码加密
const bcrypt = require('bcryptjs');
//导入生成token的包
const jwt = require('jsonwebtoken')
//导入全局的配置文件
const config = require('../config')

// 用户注册处理函数
const userLogin = (req, res) => {
  const userinfo = req.body;
  // 定义SQL语句
  const sqlStr = 'select * from xinyu where username=?';
  db.query(sqlStr, userinfo.username, (err, results) => {
      //执行SQL语句失败
      if(err) {
          return res.cc(err)
      }
      //判断用户名是否被占用
      if(results.length > 0){
          return res.cc('用户名被占用，请更换其他用户名')
      }
    });

  //调用bcrypt.hashSync()方法，对密码进行加密处理
  userinfo.password =  bcrypt.hashSync(userinfo.password,10);

  //定义插入新用户的SQL语句
  const sql = 'insert into xinyu set ?';
  //调用db.query()执行SQL语句，实现用户的注册功能
  db.query(sql,{username: userinfo.username,password:userinfo.password},(err,results) => {
      //判断SQL语句是否执行成功
      if(err){
          return res.cc(err)
      }
      //判断影响行数是否为1
      if(results.affectedRows !==1){
          return res.cc('注册用户失败，请稍后再试')
      }
      //注册成功
      res.cc('注册成功',0);
  })
}

// 用户登录处理函数
const userEnroll = (req, res) => {
  const userinfo = req.body;
  const sql = `select * from xinyu where username=?`
  db.query(sql, userinfo.username, (err, results) =>{
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')
    // TODO：判断用户输入的登录密码是否和数据库中的密码一致
    });
  // 拿着用户输入的密码,和数据库中存储的密码进行对比
  const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
  // 如果对比的结果等于 false, 则证明用户输入的密码错误
  if (!compareResult) {
    return res.cc('登录失败！')
  } 
  //TODO在服务器端生成token字符串
  const user = {...results[0],password:'',user_pic:''}
  //对用户的信息对象进行加密，生成token字符串
  const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
  //将token字符串响应给客户端
  res.send({
      status:0,
      message:'登录成功',
      //Bearer是一种认证机制，后面跟着的是token字符串
      //Bearer后面有一个空格
      token:'Bearer ' + tokenStr
  })
};

module.exports = {
  userLogin,
  userEnroll
}

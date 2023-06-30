const express = require('express');

// 创建路由对象
const router = express.Router();

// 导入验证表单数据的中间件
const expressJoi  = require('@escook/express-joi');

// 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user');

// 导入路由处理函数模块
const userHandler = require('../router/user.js');

// 用户注册
router.post('/login',expressJoi(reg_login_schema),userHandler.userLogin);

// 用户登录
router.post('/enroll',expressJoi(reg_login_schema),userHandler.userEnroll);

// 共享出路由
module.exports = router;
  
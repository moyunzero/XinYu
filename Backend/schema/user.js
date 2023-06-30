const joi = require('joi');

// 用户名验证
const username = joi.string().alphanum().min(1).max(10).required()

// 密码验证
const password = joi
.string()
.pattern(/^[\S]{6,12}$/)
.required()

// 登录注册表单验证
exports.reg_login_schema = {
  body:{
    username,
    password
  }
}

// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'

const httpMental = axios.create({
  baseURL: 'https://api.x2io.cn/api/psy/index',
  timeout: 5000
})

// 拦截器

// axios请求拦截器
httpMental.interceptors.request.use(config => {
  config.params = {
      key:'wyJcqxUAzFrK6Qz2uIAXfWhHWE',
      ...config.params
  }
  // 1. 从pinia获取token数据
  // const userStore = useUserStore()
  // // 2. 按照后端的要求拼接token数据
  // const token = userStore.userInfo.token
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpMental.interceptors.response.use(res => res.data, e => {
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  return Promise.reject(e)
})


export default httpMental
// axios基础的封装
import axios from 'axios'

const articleApi = axios.create({
  baseURL: 'http://soulpal.top:3006/article',
  timeout: 5000
})
articleApi.interceptors.request.use(
  config => {
      return config
  },
  error => {
      console.log(error)
      return Promise.reject()
  }
)

//相应拦截器
articleApi.interceptors.response.use(
  response => {
      if(response.status == 200){
          return response.data
      }else{
          Promise.reject()
      }
  },
  error => {
      console.log(error)
      return Promise.reject()
  }
)

export default articleApi
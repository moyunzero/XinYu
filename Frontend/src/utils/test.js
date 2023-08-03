// axios基础的封装
import axios from 'axios'

const testApi = axios.create({
  baseURL: 'http://localhost:3000/test',
  timeout: 5000
})
testApi.interceptors.request.use(
  config => {
      return config
  },
  error => {
      console.log(error)
      return Promise.reject()
  }
)

//相应拦截器
testApi.interceptors.response.use(
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

export default testApi
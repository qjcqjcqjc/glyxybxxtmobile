import axios from 'axios'
import qs from 'qs'
import { responseErrorNotify } from './common';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true,  // `withCredentials` 表示跨域请求时是否需要使用凭证
  transformRequest: [function(data) {
    return qs.stringify(data)
  }],
  timeout: 30* 1000 // request timeout
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    // status === 'success' 表示请求成功， === 'false' 表示请求错误
    if (res.status === 'false') {
      responseErrorNotify(res.info)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

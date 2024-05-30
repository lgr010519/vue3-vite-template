import axios from 'axios'
// import { downloadFile } from '@/utils'
import { ElMessage } from 'element-plus'
import {
  getToken,
  removeToken,
  removeUserInfo,
  setToken,
  ssoLoginUrl,
} from '@/utils/config'

export const baseUrl = import.meta.env.VITE_API_BASE_URL

// 30秒中断请求
axios.defaults.timeout = 30000

axios.defaults.baseURL = baseUrl

// 拦截发送请求
axios.interceptors.request.use(
  (config) => {
    const token = getToken()
    token && (config.headers.Authorization = 'Bearer ' + token)
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// 拦截返回结果
axios.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  (res) => {
    const { showMsg, responseType } = res.config
    if (res.status === 200) {
      let token
      if (res.headers && res.headers.authorization) {
        token = res.headers.authorization
        setToken(token)
      }

      // 导出下载文件的情况 返回格式为blob 并且 非JSON格式 (当为blob时，data直接就是一个blob，不会是一个标准接口返回格式)
      if (
        responseType &&
        responseType === 'blob' &&
        !Object.prototype.hasOwnProperty.call(res.data, 'code')
      ) {
        // const contentDisposition = res.headers.get('content-disposition')
        // const fileNameOriginal = contentDisposition
        //   .split(';')[1]
        //   .trim()
        //   .replace(/^filename=/, '')
        // const fileName = fileNameOriginal
        //   ? decodeURIComponent(fileNameOriginal)
        //   : 'download'
        // 下载文件
        // downloadFile(res.data, fileName)
        return res
      }

      // 接口不正确
      if (res.data.code !== 0) {
        if (
          res.data.code === 10127 ||
          res.data.code === 10126 ||
          res.data.code === 10117
        ) {
          // token失效
          removeToken()
          // 清空用户信息
          removeUserInfo()
          // 跳转登录
          window.location.href = ssoLoginUrl
        }
        showMsg && ElMessage.error(res.data.msg)
        return Promise.reject(res.data.msg)
      }
    } else {
      showMsg && ElMessage.error('请求服务器失败！')
      return Promise.reject('请求服务器失败！')
    }
    return res
  },
  // 超出 2xx 范围的状态码都会触发该函数。
  (err) => {
    const { message, response, config } = err
    let msg = message ? message : '请求服务器失败！'
    if (response) {
      const { data } = err.response
      if (data) {
        if (data.msg) {
          msg = data.msg
        }
        if (data.code === 10127 || data.code === 10126 || data.code === 10117) {
          // token失效
          removeToken()
          // 清空用户信息
          removeUserInfo()
          // 跳转登录
          window.location.href = ssoLoginUrl
        }
      }
    }
    config.showMsg && ElMessage.error(msg)
    err.message = msg
    return Promise.reject(err)
  },
)

/**
 * request封装
 */
export function fetchData(method, url, data = {}, config = { showMsg: true }) {
  return new Promise((resolve, reject) => {
    let request
    if (method === 'get' || method === 'delete') {
      request = axios[method](baseUrl + url, { params: data, ...config })
    } else {
      request = axios[method](baseUrl + url, data, { ...config })
    }
    request
      .then((res) => {
        resolve(res)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export const get = function (url, params, config) {
  return fetchData('get', url, params, config)
}

export const post = function (url, data) {
  return fetchData('post', url, data)
}

export const put = function (url, data) {
  return fetchData('put', url, data)
}

export const remove = function (url, params) {
  return fetchData('delete', url, params)
}

export const upload = function (url, data) {
  const formData = new FormData()
  Object.keys(data).forEach((child) => {
    formData.append(child, data[child])
  })
  return post(url, formData)
}

import axios from 'axios'
import Config from '@/assets/config'

// 默认请求地址
axios.defaults.baseURL = Config.api_url
// 超时时间
axios.defaults.timeout = 5000
// axios.defaults.headers.common['Authorization'] = '123'

function get (url, request) {
  return axios.get(url, { params: request })
    .then(response => {
      if (response.data.status == 401) {
        tokenExpire()
      }
      return response['data']
    })
    .catch(() => responseError())
}

function post (url, request) {
  return axios.post(url, request)
    .then(response => {
      if (response.data.status == 401) {
        tokenExpire()
      }
      return response['data']
    })
    .catch(() => responseError())
}

function put (url, request) {
  return axios.put(url, request)
    .then(response => {
      if (response.data.status == 401) {
        tokenExpire()
      }
      return response['data']
    })
    .catch(() => responseError())
}

function patch (url, request) {
  return axios.patch(url, request)
    .then(response => {
      if (response.data.status == 401) {
        tokenExpire()
      }
      return response['data']
    })
    .catch(() => responseError())
}

function del (url, request) {
  if (request) {
    url = url + getUrlQuery(request)
  }
  return axios.delete(url)
    .then(response => {
      if (response.data.status == 401) {
        tokenExpire()
      }
      return response['data']
    })
    .catch(() => responseError())
}

function responseError () {

}

let tokenInfo = true
function tokenExpire () {
  if (!tokenInfo) return
  tokenInfo = false
  toastr.info('登录验证过期,请重新登录')

  setTimeout(() => {
    tokenInfo = true
    window.location.href = Config.base_url
  }, 2000)
}

function getUrlQuery (request) {
  let result = '?'
  let isFirst = true
  for (const key in request) {
    if (isFirst) {
      isFirst = false
      result += key + '=' + request[key]
    } else {
      result += '&' + key + '=' + request[key]
    }
  }
  return result
}

export default { get, post, put, del, patch }

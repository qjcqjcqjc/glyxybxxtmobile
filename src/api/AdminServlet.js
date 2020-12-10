import request from '@/utils/request'

/**
 * 接口
 * @param data
 * @constructor
 */
export function AdminServlet(data) {
  return request({
    url: '/AdminServlet',
    method: 'post',
    data
  })
}

export function Fileload(data) {
  return request({
    url: '/Fileload',
    method: 'post',
    data
  })
}

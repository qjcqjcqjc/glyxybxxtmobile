import request from '@/utils/request'

/**
 * 耗材接口
 * @param data
 * @constructor
 */
export function HcServlet(data) {
  return request({
    url: '/HcServlet',
    method: 'post',
    data
  })
}

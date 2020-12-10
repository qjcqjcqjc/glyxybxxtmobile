import request from '@/utils/request'

/**
 * 接口
 * @param data
 * @constructor
 */
export function BxdServlet(data) {
  return request({
    url: '/BxdServlet',
    method: 'post',
    data
  })
}

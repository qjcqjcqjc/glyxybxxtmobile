import request from '@/utils/request'

/**
 * 接口
 * @param data
 * @constructor
 */
export function JdrServlet(data) {
  return request({
    url: '/JdrServlet',
    method: 'post',
    data
  })
}

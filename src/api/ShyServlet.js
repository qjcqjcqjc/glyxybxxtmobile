import request from '@/utils/request'

/**
 * 审核员接口
 * @param data
 * @constructor
 */
export function ShyServlet(data) {
  return request({
    url: '/ShyServlet',
    method: 'post',
    data
  })
}

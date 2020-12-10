/**
 * Created by Lct on 190805.
 */
// import { Notify } from 'vant';
import { Notification} from 'element-ui';
import config from '@/config'

/**
 * 随机数
 * @param length
 * @returns {string}
 */
export function randomKey(length) {
  length = length || 8
  let str = ''
  for (let i = 0; i < length; i++) {
    str += Math.floor(Math.random() * 10)
  }
  return str
}

/**
 * 对象复制
 * @param obj
 * @returns {*}
 */
export function copyObj(obj) {
  return obj && JSON.parse(JSON.stringify(obj))
}

/**
 * 过滤参数，空值的不传递，0传递
 * @param params
 */
export function filterParams(params) {
  const resultParams = {}
  for (const key in params) {
    if (params[key] || params[key] === 0) {
      resultParams[key] = params[key]
    }
  }
  return resultParams
}

/**
 * 获取审核员审核状态
 * @param state
 */
export function getBxdShState(state) {
  let v = config.shState.filter(v => v.value == Number(state))[0]
  return v
}

/**
 * 移动端 接口请求错误提示
 * @param info
 */
export function responseErrorNotify(info) {
  info = Number(info)
  switch (info) {
    case 0:
      Notification({ type: 'error', message: '未登录授权或无权限！', duration: 1000 })
      break
    case 1:
      Notification({ type: 'error', message: '程序错误请刷新！', duration: 1000 })
      break
    case 2:
      Notification({ type: 'error', message: '无效参数！', duration: 1000 })
      break
    case 3:
      Notification({ type: 'error', message: '缺少传递必要参数！', duration: 1000 })
      break
    default:
      Notification({ type: 'error', message: '接口异常，请重试！', duration: 1000 })
  }
}

/**
 * 报修单按申报时间从新到旧排序
 * obj.sbsj.time
 */
export function sortBxd(a, b) {
  return b.sbsj.time - a.sbsj.time
}

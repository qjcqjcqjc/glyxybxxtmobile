import Cookies from 'js-cookie'

const LOGIN_TOKEN = 'GYBX_LOGIN_TOKEN'
const auth_info = 'auth_result_info'
const eid = 'eid'
const xh = 'xh'

// cookie LOGIN_INFO
export function setCookie(token, checked) {
  return Cookies.set(LOGIN_TOKEN, token, { expires: checked ? EXPIRES : '' })
}

export function getCookie() {
  return Cookies.get(LOGIN_TOKEN)
}

export function removeCookie() {
  return Cookies.remove(LOGIN_TOKEN)
}

/**
 * 路由参数
 * @param value
 * @returns {*}
 */
export function setAuthInfo(value) {
  return Cookies.set(auth_info, value)
}

export function getAuthInfo() {
  return Cookies.getJSON(auth_info)
}

export function removeAuthInfo() {
  return Cookies.remove(auth_info)
}

/**
 * eid
 * @param value
 * @returns {*}
 */
export function setEid(value) {
  return Cookies.set(eid, value)
}

export function getEid() {
  return Cookies.get(eid)
}

export function removeEid() {
  return Cookies.remove(eid)
}

/**
 * 学号
 * @param value
 * @returns {*}
 */
export function setXh(value) {
  return Cookies.set(xh, value)
}

export function getXh() {
  return Cookies.get(xh)
}

export function removeXh() {
  return Cookies.remove(xh)
}

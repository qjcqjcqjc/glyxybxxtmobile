// import config from '@/config'
import router from '@/router'
import store from '@/store'

const field = 'oauth_count'

/**
 * 授权
 */
export function auth() {
  let count = localStorage.getItem(field) || 0
  // 2次授权失败，停止授权
  if (count >= 2) {
    localStorage.removeItem(field)
    router.push('/oauth-failed')
  } else {
    localStorage.setItem(field, ++count)
    window.location.href = store.getters.config.redirect // config.redirect
  }
}

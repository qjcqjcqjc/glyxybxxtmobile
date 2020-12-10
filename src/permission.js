import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'
import {getAuthInfo} from './utils/cookie'
import config from '@/config'
import requestConfig from '@/utils/requestConfig'
import axios from 'axios'

NProgress.configure({showSpinner: false}) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // 配置json
  if (JSON.stringify(store.getters.config) == '{}') {
    let config = await requestConfig()
    await store.dispatch('app/setConfig', config)
    if (process.env.NODE_ENV === 'production') { // 生产环境
      axios.defaults.baseURL = config.api // 配置接口地址
    } else {
      axios.defaults.baseURL = process.env.VUE_APP_BASE_API
    }
  }
  // 设置网页标题
  document.title = getPageTitle(to.meta.title)

  if (to.path === '/index' || to.path === '/no-permission' || to.path === '/oauth-failed' || to.path === '/404') { // 授权重定向页面
    next()
  } else { // 其他正常进入的页面
    // 首先读取cookie是否有授权信息，如果有 直接进去页面，如果没有 跳到授权登录页面
    let authInfo = getAuthInfo()
    if (authInfo) {
      switch (Number(authInfo.sf)) {
        case 1:
          if (
            to.path.indexOf(config.declarePath) !== -1 ||
            to.path.indexOf(config.declareRecordPath.replace(':id', '')) !== -1 ||
            to.path.indexOf(config.declareDetailsPath.replace(':id', '')) !== -1
          ) {
            next()
          } else {
            next('/no-permission')
          }
          break;
        case 2:
          if (
            to.path.indexOf(config.receiverRecordPath.replace(':id', '')) !== -1 ||
            to.path.indexOf(config.receiverDetailsPath.replace(':id', '')) !== -1
          ) {
            next()
          } else {
            next()
            next('/no-permission')
          }
          break;
        case 3:
          if (
            to.path.indexOf(config.checkerRecordPath.replace(':id', '')) !== -1 ||
            to.path.indexOf(config.checkerDetailsPath.replace(':id', '')) !== -1
          ) {
            next()
          } else {
            next('/no-permission')
          }
          break;
      }
    } else {
      window.location.href = store.getters.config.redirect
      // next('/index')
    }
  }


  // 申报页面
  /*if (to.path === config.declarePath) {
    if (to.query && to.query.xm && to.query.xh && to.query.head) {
      store.dispatch('tagsView/addView', to)
      // 检测vuex里是否有blist，有则直接进入路由，没有则足需要获取
      const hasBlist = store.getters.blist
      if (!hasBlist.length) {
        await store.dispatch('sbr/SbrServlet', to.query.xh)
      }
      next()
      return
    } else {
      window.location.href = config.redirect
      return
    }
  }

  // 申报记录
  else if (to.path.indexOf(config.declareRecordPath.replace(':id', '')) !== -1) {
    let hasDeclarerCookie = getDeclarerCookie()
    if (hasDeclarerCookie) {
      hasDeclarerCookie = JSON.parse(hasDeclarerCookie)
      store.dispatch('tagsView/addView', to)
      const hasBlist = store.getters.blist
      if (!hasBlist.length) {
        await store.dispatch('sbr/SbrServlet', hasDeclarerCookie)
      }
      next()
      return
    } else {
      window.location.href = config.redirect
      return
    }
  }

  // 申报单详情
  else if (to.path.indexOf(config.declareDetailsPath.replace(':id', '')) !== -1) {
    if (to.query.hasOwnProperty('qrcode')) {
      next()
      return
    } else {
      const hasDeclarerCookie = getDeclarerCookie()
      if (hasDeclarerCookie) {
        store.dispatch('tagsView/addView', to)
        store.commit('sbr/SET_XH', hasDeclarerCookie)
        next()
        return
      } else {
        window.location.href = config.redirect
      }
    }
  }

  // 接单人
  else if (to.path === config.receiptPath) {
    store.dispatch('tagsView/addView', to)
    next()
    return
  }*/
})

router.afterEach(() => {
  NProgress.done()
})

import Vue from 'vue'
import Router from 'vue-router'
import config from '@/config'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/mobile/redirect')
  },
  /*{
    path: config.qrcodePath,
    component: () => import('@/views/mobile/qrcode/index'),
    name: 'Qrcode',
    meta: { title: '报修详情' },
    hidden: true
  },*/
  /************** 申报人相关路由 ****************/
  {
    path: config.declarePath,
    component: () => import('@/views/mobile/declare/index'),
    name: 'Declare',
    meta: { title: '维修申报', noCache: true }
  },
  // 正在申报中的 id是用户eid
  {
    path: config.declareEidRecordPath,
    component: () => import('@/views/mobile/declare/eidrecord'),
    name: 'DeclareEidRecord',
    meta: { title: '正在申报中' }
  },
  // 申报记录 id是用户id
  {
    path: config.declareRecordPath,
    component: () => import('@/views/mobile/declare/record'),
    name: 'DeclareRecord',
    meta: { title: '申报记录' }
  },
  // 申报详情 id是报修单id
  {
    path: config.declareDetailsPath,
    component: () => import('@/views/mobile/declare/details'),
    name: 'DeclareDetails',
    meta: { title: '申报单', noCache: true }
  },

  /************** 接单人相关路由 ****************/
  {
    path: config.receiverRecordPath,
    component: () => import('@/views/mobile/receiver/record'),
    name: 'ReceiverRecord',
    meta: { title: '工单记录' }
  },
  // 工单详情 id是报修单id
  {
    path: config.receiverDetailsPath,
    component: () => import('@/views/mobile/receiver/details'),
    name: 'ReceiverDetails',
    meta: { title: '申报单', noCache: true }
  },

  /************** 审核员相关路由 ****************/
  {
    path: config.checkerRecordPath,
    component: () => import('@/views/mobile/checker/record'),
    name: 'CheckerRecord',
    meta: { title: '工单记录' }
  },
  // 工单详情 id是报修单id
  {
    path: config.checkerDetailsPath,
    component: () => import('@/views/mobile/checker/details'),
    name: 'CheckerDetails',
    meta: { title: '申报单', noCache: true }
  },


  {
    path: '/oauth-failed',
    component: () => import('@/views/mobile/oauth-failed')
  },
  {
    path: '/no-permission',
    component: () => import('@/views/mobile/no-permission')
  },
  {
    path: '/404',
    component: () => import('@/views/mobile/404')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

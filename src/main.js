import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import moment from 'moment'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import '@/styles/iconfont/iconfont.js' // iconfont.js
import '@/styles/iconfont/iconfont.css' // iconfont
import '@/icons' // icon
import '@/permission' // permission control
import 'lib-flexible/flexible.js'

// Import UI
import '@/ui/element-ui'
import '@/ui/vant'
import '@/ui/nutui'

// Animate.css
// import animated from 'animate.css'
// Vue.use(animated)

// import VConsole from 'vconsole' //import vconsole
// let vConsole = new VConsole() // 初始化
// console.log('VConsole is cool')

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

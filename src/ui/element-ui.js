/*
 * @Author: your name
 * @Date: 2020-05-28 09:09:07
 * @LastEditTime: 2020-11-24 23:12:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \gybx_m\src\ui\element-ui.js
 */
import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Notification } from 'element-ui'
Vue.use(ElementUI)

Vue.prototype.$elnotify = Notification;

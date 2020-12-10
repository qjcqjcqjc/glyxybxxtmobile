import {JdrServlet} from '@/api/JdrServlet'
import {getAuthInfo} from "../../utils/cookie";
import {filterParams, responseErrorNotify} from "../../utils/common";
import { Notify } from 'vant';

const state = {
  jblist: []
}

const mutations = {
  SET_BLIST: (state, datas) => {
    state.jblist = datas
  }
}

const actions = {
  // 获取当前工人的报修单记录
  getBxdList({commit}) {
    return new Promise((resolve, reject) => {
      let authInfo = getAuthInfo()
      let params = {
        op: 'selbxdbyjdr', // 调用方法，固定值*
        jid: authInfo.ybid, // 学号*
        eid: authInfo.eid	// 扫码查询
      }
      JdrServlet(filterParams(params)).then(response => {
        // const {blist} = response.obj.blist
        if (response.obj.blist) {
          commit('SET_BLIST', response.obj.blist)
          resolve()
        } else {
          responseErrorNotify(response.status)
          reject(error)
        }
      }).catch(error => {
        Notify({ type: 'danger', message: '接口异常或网络中断', duration: 1000 })
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

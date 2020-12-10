import {BxdServlet} from '@/api/BxdServlet'
import {getAuthInfo} from "../../utils/cookie";
import {filterParams, responseErrorNotify} from "../../utils/common";
import { Notify } from 'vant';

const state = {
  blist: []
}

const mutations = {
  SET_BLIST: (state, datas) => {
    state.blist = datas
  }
}

const actions = {
  // 获取当前学生的报修单记录
  getBxdList({commit}) {
    return new Promise((resolve, reject) => {
      let authInfo = getAuthInfo()
      let params = {
        op: 'sbrbxd', // 调用方法，固定值*
        xh: authInfo.xh, // 学号*
        eid: authInfo.eid	// 扫码查询
      }
      BxdServlet(filterParams(params)).then(response => {
        const {blist} = response.obj.blist
        if (blist) {
          commit('SET_BLIST', blist)
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

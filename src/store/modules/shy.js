import {ShyServlet} from '@/api/ShyServlet'
import {getAuthInfo} from "../../utils/cookie";
import {filterParams, responseErrorNotify} from "../../utils/common";
import { Notify } from 'vant';

const state = {
  sblist: []
}

const mutations = {
  SET_BLIST: (state, datas) => {
    state.sblist = datas
  }
}

const actions = {
  // 获取当前工人的报修单记录
  getBxdList({commit}) {
    return new Promise((resolve, reject) => {
      let authInfo = getAuthInfo()
      let params = {
        op: 'selbxdbyshy', // 调用方法，固定值*
        shyid: authInfo.ybid, // 审核员易班ID*
        eid: authInfo.eid	// 扫码查询
      }
      ShyServlet(filterParams(params)).then(response => {
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

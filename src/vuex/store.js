import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    visible : false, //返回顶部按钮显隐状态
    banner:[], //banner数据源
    menulist:[ //菜单栏数据
      {
        link:'/',
        name:"首页"
      },
      {
        link:'/echarts',
        name:"echarts"
      }
    ],
    lists: []
};
export default new Vuex.Store({
  state, //状态
  getters, //处理state数据
  mutations, // 注册我们各种数据变化的方法
  actions, //可以编写异步的逻辑或者是一些逻辑，再去commit 我们的事件
});

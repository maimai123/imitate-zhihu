import * as types from '../mutation-types'

export default {
  //删除id为1的blog
  deleteBlog({ commit }, id ) {
    // setTimeout(() => {
      commit( types.DEL_TO_BLOG, id )
    // }, 1000)
  },
  // 保存博客
  saveBlog({ commit }, plan) {
    commit(types.SAVE_TO_BLOG, plan);
  },
  //新增很多数据
  loadMore({ commit },more_List) {
    commit( types.LOAD_MORE,more_List)
  },
  //修改visible的状态
  changeVisible({ commit },flag) {
    commit( types.CHANGE_VISIBLE,flag )
  },
  //修改slide shown的状态
  changeShown({ commit },flag) {
    commit( types.CHANGE_SHOWN,flag )
  },
  //设置store lists的值
  setLists({ commit }, data ) {
    console.log(data)
    commit( types.SET_LISTS , data );
  },
  //设置store banner的值
  setBanner({ commit }, data ) {
    commit( types.SET_BANNER , data );
  },
};

import * as types from '../mutation-types.js';

export default {
  // 各种方法写在这里
  [ types.DEL_TO_BLOG ] ( state, { id }) { //删除id为1的blog
    state.lists.splice(id,1)
  },


  [ types.SAVE_TO_BLOG ] ( state, { plan }) { //添加一篇blog
    state.list.push(
      Object.assign({ name: '麦麦', avatar: '' }, plan)
    )
  },
  [ types.LOAD_MORE ] ( state, list ) { //新增更多数据
    list.map((item,index)=>{
      state.lists.push( Object.assign({}, item) )
    })

  },

  [ types.SET_LISTS ] ( state ,data) { //把lists放入store
    data.map((item,index)=>{
      state.lists.push(
        Object.assign({}, item)
      );
    });
  },

  [ types.CHANGE_VISIBLE ] ( state, flag ) { //修改返回顶部显隐状态
    state.visible =  flag;
  },

  [ types.CHANGE_SHOWN ] ( state, flag ) { //修改slide显隐状态
    state.shown =  flag;
  },

  [ types.SET_BANNER ] ( state ,data) { //把banner放入store
    data.map((item,index)=>{
      state.banner.push(
        Object.assign({}, item)
      );
    });
  },
}

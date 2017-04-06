<template>
  <div>
    <!-- 图片轮播 -->
    <Banner></Banner>
    <!-- 列表展示 -->
    <BlockCom></BlockCom>
  </div>
</template>
import store from './../../vuex/store.js';
<script>
import Banner from './../banner.vue';
import BlockCom from './../blockCom.vue';
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'articles',
  computed:{
    ...mapGetters({
      lists:'filterLists'
    })
  },
  components:{
    'Banner': Banner, //首图
    'BlockCom':BlockCom, //列表渲染
  },
  methods:{
    ...mapActions(['setLists','setBanner','changeVisible']),
  },
  mounted() {
    this.changeVisible(false); //页面一进来不显示回到顶部按钮
  },
  created(){
    let self = this;
    this.$http.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/latest').then(response => {
      self.setLists(response.body.stories); //lists
      self.setBanner(response.body.top_stories); //banner
    }, response => {
      console.log("请求失败");
    });
  }
}
</script>

<style lang="less" scoped >
@9:#999;
.likes{
  display: block;
  margin-top: 8px;
}
.list-group .close{
  position:relative;
  top:0;
}
.text-over3{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.articleName{
  width:600px;
  margin: -4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ml-34{
  margin-left:34px;
}
.list-group-item{
  margin:10px 0;
}
.avatar{
  width:30px;
  height: 30px;
}
.color-9{
  color: @9;
}
.m-dib{
  display: inline-block;
}
</style>

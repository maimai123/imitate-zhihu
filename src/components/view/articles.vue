<template>
  <div>
    <div class="spinner" v-if="isLoading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
  	</div>
    <div v-else>
      <!-- 图片轮播 -->
      <Banner></Banner>
      <!-- 列表展示 -->
      <BlockCom></BlockCom>
    </div>
  </div>
</template>
import store from './../../vuex/store.js';
<script>
import Banner from './../banner.vue';
import BlockCom from './../blockCom.vue';
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'articles',
  data() {
		return {
			isLoading: true,
		}
	},
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
      self.isLoading = false;
    }, response => {
      console.log("请求失败");
    });
  }
}
</script>

<style lang="less" scoped >
@9:#999;
.spinner{
  z-index: 999;
  padding-top: 15%;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 100vh;
  position:relative;
  text-align: center;
  font-size: 10px;
  overflow: hidden;
}
.spinner > div {
  background-color: #67CF22;
  height: 10%;
  width: 6px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
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

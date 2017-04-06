<template>
  <div class="wrapper">
    <!-- 头部导航栏 -->
    <Heads></Heads>
    <!-- 路由 -->
    <transition name="slide-left">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <!-- 返回顶部 -->
    <Backscroll  v-show="visible" :scroller="scroller"></Backscroll>
  </div>
</template>
<script>
import store from './vuex/store';
import Heads from './components/header.vue';
import Backscroll from './components/backScroll.vue';
export default {
  name: 'layout',
  components:{
    Heads,
    'Backscroll':Backscroll //返回顶部
  },
  computed:{
    visible(){
      return store.getters.visible;
    }
  },
  data(){
    return{
       show: true,
       input: '',
       scroller: null,
    }
  },
  method:{
  },
  mounted:function(){
    this.scroller = this.$el;
  },
  created(){
    store.dispatch('changeVisible',false);
  }
}
</script>
<style lang="less" scoped>
body{
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.wrapper{
  position:relative;
  width:10rem;
  height:100vh;
  overflow-y:auto;
  overflow-x:hidden;
}
::-webkit-scrollbar{width:2px;}
::-webkit-scrollbar-track{background-color:#ddd;}
::-webkit-scrollbar-thumb{background-color:#aaa;}
::-webkit-scrollbar-thumb:hover {background-color:#aaa}
::-webkit-scrollbar-thumb:active {background-color:#aaa}
/*过渡动画*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50vw, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0.1;
    -webkit-transform: translate(-50vw, 0);
}
@media screen and (min-width: 640px){
	.wrapper{
		width: 640px;
		left: 50%;
		transform: translate(-50%,0);
	}
	.aside ul{
		width: 350px;
	}
}
</style>

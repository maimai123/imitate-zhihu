<template>
  <!-- ===================mm左侧列表->start ===================== -->
    <div class="panel-mask">
      <ul>
        <li v-for="(item,index) in menulist" :class="{chose:num == index}" @click="changeNum(index)">
          <router-link :to="item.link+'?choose='+index">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="cover" @click="prevent"></div>
    </div>
  <!-- ===================mm 左侧列表->END ===================== -->
</template>

<script>
import store from '../vuex/store';
import getUrl from './gitUrl/index';
export default {
  name: 'sidebar',
  data () {
    return {
      num: getUrl("choose"),
    }
  },
  props:["toggle"],
  computed:{
    menulist(){
      return store.getters.menulist;
    }
  },
  methods:{
    prevent(event) { //关闭侧边栏
      this.$emit('toggle'); //调用父组件方法
			event.preventDefault();
			event.stopPropagation();
		},
    changeNum(n){ //li当前选中
      this.num = n;
      this.$emit('toggle'); //调用父组件方法
    }
  },
  mounted(){
  }
}
</script>
<style media="screen" lang="less" scoped>
  .panel-mask{
    position: fixed;
    left: 0;
    top:0;
    right:0;
    bottom:0;
    z-index:11;
    visibility: hidden;
    ul {
      margin: 0;
      float: left;
      width: 60%;
      height: 100%;
      padding: 1.3rem .5rem .5rem;
      list-style:none;
      overflow: auto;
      background: rgba(91,116,146,.75);
      transform: translate(-100%);
      transition: transform .3s ease;
      -webkit-overflow-scrolling: touch;
      li{
        padding:.1rem .2rem;
        font-size:16px;
        font-weight:400;
        margin-top: 0.3rem;
        cursor:pointer;
        a{
          display:block;
          color:white;
          text-decoration:none;
        }
        &.chose {
          a{
            color: #FFD300;
          }
        }
      }
    }
    .cover{
      width: 100%;
      height: 100%;
      opacity: 1;
      background: rgba(172,185,201,.4);
      transition: opacity .3s ease;
    }
  }
  .panel-mask.docked {
    visibility: visible;
  }
  .panel-mask.open ul {
    transform: translate(0);
  }
  .left-panel{
    margin: 0;
    float: left;
    width: 60%;
    height: 100%;
    padding: 1.3rem .5rem .5rem;
    overflow: auto;
    background: rgba(91,116,146,.75);
    transform: translate(-100%);
    transition: transform .3s ease;
    -webkit-overflow-scrolling: touch;
    z-index: 2;
    h2{
      color: white;
      padding: 50% 10%;
    }
  }
</style>

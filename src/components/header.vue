<template>
  <div>
    <!-- 菜单按钮 -->
    <div class="menu" @click="toggle(true)"></div>
    <!-- 侧边栏 -->
    <Silderbar :class="{open:open,docked:docked}" @click="toggle()"  @toggle="toggle"></Silderbar>
  </div>
</template>

<script>
import store from '../vuex/store';
import Silderbar from './sidebar.vue';
export default {
  name: 'banner',
  components:{
    'Silderbar':Silderbar
  },
  data () {
    return {
      shown:false,
      open:false,
      docked:false,
    }
  },
  methods:{
    toggle(flag) {
			if (!this.open) {
				this.docked = true;
				this.open = true;
			} else {
				this.open = false;
				let self = this;
				setTimeout(function() {
					self.docked = false;
				}, 300);
			}
		},
  }
}
</script>
<style lang="less" scoped>
@import 'https://at.alicdn.com/t/font_ig6xu4rwjodh1tt9.css';
@black:#1d1d1d;
@white:#ebebeb;
@e9:#e9e9e9;
*{
  box-sizing: border-box;
  padding: 0;
  margin:0;
}
.header-m{
  height:1.0666666666666667rem;
}
.el-menu-item:first-child{
  margin-left: 0.9333333333333333rem;
}
.el-menu--horizontal .el-menu-item{
  height:1.0666666666666667rem;
  line-height:1.0666666666666667rem;
}
.menu{
  position:absolute;
  top:0.3466666666666667rem;
  left:0.3333333333333333rem;
  z-index: 8;
  width:0.4rem;
  height:0.4rem;
  border-top:0.06rem solid #fff;
  border-bottom:0.06rem solid #fff;
}
.menu:after{
  content:'';
  width:0.4rem;
  border-top:0.06rem solid #fff;
  border-radius: 2px;
  position:absolute;
  top:0.12rem;
}
.el-menu-item, .el-submenu__title{
  font-size: 0.26666666666666666rem;
}
</style>

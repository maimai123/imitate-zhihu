<template>
	<div class="back" @click="backtoTop">
			<i class="iconfont icon-ic_top"></i>
	</div>
</template>
<script>
import store from './../vuex/store';
import Scroll from './scroll';
import { mapActions } from 'vuex';
export default {
	name: 'Backscroll',
	mixins: [Scroll],
	props: ['scroller'],
	methods: {
		...mapActions(['changeVisible']),
		onScroll() {
			var self = this;
			const scroller = this.scroller;
			const height = Math.ceil(window.screen.height / 2);
			const scrollTop = scroller.scrollTop;
			// 监听页面已滑动的位置，当页面滑动半屏之后，显示“返回顶部”按钮
			if (scrollTop > height) {
				self.changeVisible(true);
			}else{
				self.changeVisible(false);
			}
		},
		backtoTop(){
			const scroller = this.scroller;
			$(".wrapper").animate({scrollTop:"0px"});
		}
	}
}
</script>
<style media="screen" lang="less" scoped>
	.back{
		width: 40px;
    height: 40px;
    border-radius: 50%;
    background: hsla(0,0%,100%,.8);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    right: 5%;
    bottom: 5vw;
    position: fixed;
    z-index: 10;
		i{
			top: 50%;
	    left: 50%;
	    font-size: .6rem;
	    color: #acb9c9;
	    transform: translate(-50%,-50%);
	    position: absolute;
		}
		.icon-ic_top:before{
			content: "\e605";
		}
	}
</style>

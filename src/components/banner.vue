<template>
  <div class="banner">
    <!-- <el-carousel height="5.3rem">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <banner-m swipeid="swipe" ref="swiper" :autoplay="3000" effect="slide">
      <div v-for="item in banner" class="swiper-slide" slot="swiper-con">
  			<img :src="item.image">
  			<div></div>
  			<h3>{{item.title}}</h3>
  		</div>
    </banner-m>
  </div>
</template>

<script>
import store from '../vuex/store';
import bannerM from './swipe/swipe.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'articles',
  data () {
    return {
      swiper: this.$refs.swiper,
    }
  },
  computed:{
    ...mapGetters(['banner'])
  },
  components:{
    bannerM
  },
  mounted(){
    let swiper = this.$refs.swiper;
		if (swiper.dom) {
			this.swiper = swiper.dom;
		}
  },
  activated() {
		if (this.swiper) {
			this.swiper.startAutoplay();
		}
	},
	deactivated() {
		this.loop = false;
		if (this.swiper) {
			this.swiper.stopAutoplay();
		}
	},
}
</script>

<style lang="less" scoped>
@import 'https://at.alicdn.com/t/font_ig6xu4rwjodh1tt9.css';
@9:#999;
.banner{
  width:100%;
  position:relative;
  margin-bottom:10px ;
}
.swiper-container {
    width: 100%;
}
.swiper-slide {
    height: 8rem;
    overflow: hidden;
    position: relative;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 1rem;
    width: 95%;
    text-align: right;
}
.list:nth-child(2) {
    margin-bottom: 0;
    padding-top: 0;
    .list-time {
        top: -.8rem;
    }
}
.swiper-slide {
    div {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        position: absolute;
        background-color: #5b7492;
    }
    img {
        top: 50%;
        position: relative;
        transform: translate(0, -50%);
    }
    h3 {
        width: 70%;
        color: #fff;
        margin: 0;
        font-size: 0.5rem;
        line-height: 1rem;
        right: 5%;
        bottom: 2.6rem;
        text-align: right;
        position: absolute;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
        &:before {
            content: "";
            width: 3rem;
            bottom: -.6rem;
            right: 0;
            display: block;
            position: absolute;
            border: 2px solid yellow;
        }
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 5.3rem;
    text-align: center;
    font-size: 0.32rem;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>

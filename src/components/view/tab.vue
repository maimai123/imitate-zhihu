<template>
  <div>
  <ul class="tab">
    <li   v-for="item in tabList" @click="goto(item.id)" :id="item.id">{{ item.name}}</li>
  </ul>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
    <swiper-slide class="swiper-item">
      <div class="title" data-swiper-parallax="-100">Slide 1</div>
      <br>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="title" data-swiper-parallax="-100">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="title" data-swiper-parallax="-100">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      isLoading: false,
      key: "",
      tabList:[
        {
          name:'第一页',
          id:1
        },
        {
          name:'第二页',
          id:2
        },
        {
          name:'第三页',
          id:3
        },
      ],
      swiperOption: {
        notNextTick: true,
        loop:true,
        speed:600,
        onSlideChangeStart: function(swiper){
          console.log(swiper.activeIndex);
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    // this.swiper.slideTo(3, 1000, false)

  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    goto(id){
      this.swiper.slideTo(id, 500, false)
    }
  }
}
</script>

<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
html,body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
}
.tab{
  margin:0;
  padding: 0;
  height:1rem;
  line-height: 1rem;
  position: relative;
  z-index: 99;
  list-style: none;
  font-size: 0;
  background-color: #461a72;
}
.tab li{
  font-size: 16px;
  display: inline-block;
  width:33%;
  text-align: center;
  color: white;
}
.swiper-box {
  width: 100%;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
}
.swiper-item {
  height: 100%;
  text-align: center;
  font-size: 18px ;
  background: #fff;
  padding-top: 2rem;
}
.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}
.swiper-slide .subtitle {
  font-size: 21px;
}
.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>

<template>
  <div class="details">
    <div class="spinner" v-if="isLoading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
  	</div>
    <div class="con" v-else>
      <div v-if="content.image" class="con-img">
    		<img :src="content.image" />
    		<div class="con-img-mask"></div>
    		<h2>{{content.title}}</h2>
    	</div>
      <div v-html="content.body">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      isLoading: true,
      show: true,
      content:'麦麦',
    }
  },
  mounted(){
    var self =this;
    var id = this.$route.query.articleId;
    this.$http.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/'+id).then(response => {
      self.isLoading = false;
      self.content = response.body;

      // self.$nextTick(function () { //dom更新后触发
      //   // 把获取到的css放入head
      //   var head = document.getElementsByTagName('head')[0];
      //   var linkTag = document.createElement('link');
      //   linkTag.href = response.body.css[0];
      //   head.appendChild(linkTag);
      // });

      }, response => {
        console.log("请求失败");
      });
  }
}
</script>
<style lang="less">
@import 'http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3';
.content-wrap{
  background-color: #f9f9f9 !important;
}
.img-place-holder{
  height:0 !important;
}
h1, h2 {
  font-weight: normal;
}
.con-img {
    height: 6rem;
    overflow: hidden;
    position: relative;
    img {
        top: 50%;
        width: 100%;
        position: relative;
        transform: translate(0,-50%);
    }
    h2 {
        width: 60%;
        margin: 0;
        padding: 0;
        right: 5%;
        bottom: 1rem;
        text-align: right;
        font-size: 0.45rem;
        color: rgba(255,255,255,.9);
        position: absolute;
        text-shadow: 0 0 5px rgba(0,0,0,.5);
    }
    &-mask {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(91,116,146,0.50);
        position: absolute;
    }
}
.spinner{
  z-index:4;
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
.hello{
  height: 1500px;
  background: pink;
}

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
</style>

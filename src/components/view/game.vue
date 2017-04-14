<template>
  <div class="details">
    <div class="spinner" v-if="isLoading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
  	</div>
    <div v-else>
      ss
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      isLoading: false,
      show: true,
    }
  },
  mounted(){
  //   wx.config({
  //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //     appId: 'wxced88827ff34f52c', // 必填，公众号的唯一标识
  //     timestamp: '', // 必填，生成签名的时间戳
  //     nonceStr: '', // 必填，生成签名的随机串
  //     signature: '',// 必填，签名，见附录1
  //     jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  // });
  }
}
</script>

<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
.details{
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  .box{
    width:2rem;
    height:2rem;
    border-radius: 50%;
    border:2px solid red;
  }
}
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

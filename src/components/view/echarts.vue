<template>
  <div class="details">
    <div class="spinner" v-if="!isLoading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
  	</div>
    <div v-else>
    <!-- <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition> -->
    <div id="echart">

    </div>
  </div>
  </div>
</template>

<script>
let echarts = require('echarts');

export default {
  name: 'about',
  data () {
    return {
      isLoading: true,
      show: true
    }
  },
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'));
    var random = function (max) {
        return (Math.random() * max).toFixed(3);
    };
    var seriesData1=[],seriesData2=[];
    for (var i = 0; i < 100; i++) {
        seriesData1.push([random(15), random(10), random(1)]);
        seriesData2.push([random(10), random(10), random(1)]);
    }
    // myChart.showLoading();
    // myChart.hideLoading();
    // 绘制图表
    myChart.setOption({
        title: { //标题组件，包含主标题和副标题。
          text: '麦麦学习 vue ECharts',
           subtext: 'vue ECharts',
           sublink: 'https://github.com/maimai123/echarts',
           left: 'center',
           top: 'top',
           textStyle: {
               color: '#fff'
           }
        },
        tooltip: {},
        xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            start: 30,
            end: 80
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            start: 30,
            end: 80
        }
    ],
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: seriesData1
        },
        {
            name: 'scatter2',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: seriesData2
        }
    ]
    });
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  background-color:#dfcece;
}
#echart{
  width:10rem;
  height:10rem;
  margin-top:1rem;
}
h1, h2 {
  font-weight: normal;
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

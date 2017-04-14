<template>
  <div class="app_views">
      <div class="card" v-for="(item,index) in lists" :key="index" @click="goto(item.id)">
          <div class="imgbox">
            <img :src="item.images" alt="pic">
          </div>
          <div class="content-box">
            <div class="title-m">
              {{ item.title }}
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import store from '../vuex/store';
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'articles',
  computed:{
    ...mapGetters({
      lists:'filterLists'
    })
  },
  methods:{
    goto(ids){
      this.$router.push({
        path:'detail',
        query:{
          articleId : ids || ''
        }
      });
    }
  },
  mounted(){
    let self = this;
    $(window).scroll(function(){ //判断页面到底部，加载更多数据
      var winH = $(window).height(),
      domH = $(document).height(),
      scrollTop = $(".wrapper").scrollTop();
      //下面的1是距离底部只有1px的意思，可根据个人需要修改
      if(domH - winH - scrollTop < 60){
        console.log("++++")
      }else{
        return false;
      }
    });
  },
}
</script>

<style lang="less" scoped>
.image{
  width:2rem;
  height:2rem;
  float:left;
}
.card{
  display:flex;
  padding:.2rem;
  width:96%;
  height:2.4rem;
  border:1px solid #ddd;
  border-radius:3px;
  box-shadow:2px 2px 3px #ddd;
  margin:0.3rem auto;
}
.card:after{
  content:'';
  display:block;
  clear:both;
}
.imgbox{
  width: 21%;
  height: 2rem;
  img{
    max-width:100%;
  }
}
.content-box{
  width: 79%;
  height: 2rem;
  position:relative;
  padding:0 0.2rem;
  font-size: 0.35rem;
}
.title-m{
  font-size:0.36rem;
  color:#999;
}
.time{
  color: #999;
}
.liked{
  color: red;
}
.like{
  color:#333;
}
.bottom{
  position: absolute;
  bottom: 0.1rem;
}
*{
  box-sizing: border-box;
}
.button{
  font-size:0.35rem;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../App.vue';
import Article from '../components/view/articles.vue'
import Detail from '../components/view/About.vue'
import Login from '../components/view/Login.vue'
import Echarts from '../components/view/echarts.vue'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes : [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/Articles',
      children:[
        {
          path: 'Articles',
          name: 'Articles',
          component: Article,
          meta:{
            title:'首页'
          }
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
          meta:{
            title:'登录'
          }
        },
        {
          path: 'detail',
          name: 'Detail',
          component: Detail,
          meta:{
            title:'详情'
          }
        },
        {
          path: 'echarts',
          name: 'Echarts',
          component: Echarts,
          meta:{
            title:'echarts'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
  });
router.beforeEach(({ meta, path }, from, next) => {
  document.title = meta.title;
  next();
});
export default router;

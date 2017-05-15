import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../App.vue';
import Article from '../components/view/articles.vue'
import Detail from '../components/view/About.vue'
import Login from '../components/view/Login.vue'
import Echarts from '../components/view/echarts.vue'
import Filiter from '../components/view/game.vue'
import Tab from '../components/view/tab.vue'
Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes : [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/tab',
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
        },
        {
          path: 'Filiter',
          name: 'Filiter',
          component: Filiter,
          meta:{
            title:'Filiter'
          }
        },
        {
          path: 'tab',
          name: 'tab',
          component: Tab,
          meta:{
            title:'tab切换'
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

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../App.vue';
import Article from '../components/view/articles.vue'
import About from '../components/view/About.vue'
import Login from '../components/view/Login.vue'

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
          path: 'about',
          name: 'About',
          component: About,
          meta:{
            title:'详情'
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

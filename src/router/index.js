import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import LoginView from '@/view/LoginView'
import PagesView from '@/view/pageViews'
import HomeView from "@/view/HomeView"
import MoiveView from "@/view/MoiveView"
import MeView from "@/view/MeView"
import BookView from "@/view/BookView"
import InfoView from "@/view/InfoView"
Vue.use(Router)

const route = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/pages',
      component: PagesView,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
        {
          path:'home',
          name:'HomeView',
          component:HomeView
        },
        {
          path:'moive',
          name:'MoiveView',
          component:MoiveView
        },
        {
          path:'me',
          name:'MeView',
          component:MeView
        },
        {
          path:'bookView',
          name:'BookView',
          component:BookView
        }
      ]
    },
    {
      path:'/info',
      name:"InfoView",
      component:InfoView
    },
    {
      path:'/login',
      name:"LoginView",
      component:LoginView
    },
    {
      path:'*',
      redirect: '/login'
    }
  ]
});
route.afterEach((to,from)=>{
  const auth = store.state.isLogin;
  if(!auth){
    route.push({name: 'LoginView'})
  }
})
route.beforeEach((to,from,next)=>{
  const nextRoute = [ 'PagesView', 'BookView', 'HomeView', 'MoiveView'];
  const auth = store.state.isLogin;
  //跳转至上述3个页面
  if (nextRoute.indexOf(to.name) >= 0) {
      //未登录
      if (!auth) {
          route.push({name: 'LoginView'})
      }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === 'login') {
      if (auth) {
        route.push({name: 'HomeView',params:{auth:false}});
      }
  }
  next();
})
export default route;

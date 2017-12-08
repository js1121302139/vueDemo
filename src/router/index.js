import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/view/pageViews'
import HomeView from "@/view/HomeView"
import MoiveView from "@/view/MoiveView"
import InfoView from "@/view/InfoView"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages/'
    },
    {
      path: '/pages',
      name: 'PagesView',
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
        }
      ]
    },
    {
      path:'/info',
      name:"InfoView",
      component:InfoView
    },
    {
      path:'*',
      redirect: '/pages/'
    }
  ]
})

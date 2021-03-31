import Vue from 'vue'
import Router from 'vue-router'


//一级路由
import Home from "./components/Home"
import Menu from "./components/Menu"
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from "./components/about/Contact";
import Delivery from "./components/about/Delivery";
import History from "./components/about/History";
import OrderingGuide from "./components/about/OrderingGuide";

//三级路由
import Person from "./components/about/contact/Person";
import Phone from "./components/about/contact/Phone";

Vue.use(Router)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/menu',
      component:Menu
    },
    {
      path:'/admin',
      component:Admin
    },
    {
      path:'/about',
      component:About,
      redirect:'/about/history',//默认显示
      children:[
        {
          path:'/about/contact',
          name:'contactLink',
          component:Contact,
          children:[
            {
              path:'/phone',
              name:'phoneNumber',
              component:Phone
            },{
              path:'/person',
              name:'person',
              component:Person
            },
          ]
        },{
          path:'/about/delivery',
          name:'deliveryLink',
          component:Delivery
        },{
          path:'history',
          name:'historyLink',
          component:History
        },{
          path:'/about/orderingGuide',
          name:'orderingGuideLink',
          component:OrderingGuide
        },
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    }
  ]
})




//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('未登录')
//     next('/login')
//   }
// })

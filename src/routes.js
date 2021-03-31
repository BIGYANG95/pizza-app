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

export const routes = [
  {
    //如果用户输入的路径不存在，或者与路由表的地址不匹配，则直接跳转到根目录下
    path:'*',
    redirect:'/'
  },
  {
    path:'/',
    component:Home,
    name:'homeLink',
    components:{
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }
  },
  {
    path:'/menu',
    component:Menu,
    name:'menuLink'
  },
  {
    path:'/admin',
    component:Admin,
    name:'adminLink',
  //   beforeEnter:(to,from,next)=>{
  //     //路由独享守卫
  //     alert('非管理员禁止进入');
  //       if(to.path == '/login' || to.path == '/register'){
  //   next();
  // }else{
  //   alert('未登录')
  //   next('/login')
  // }
  //   }
  },
  {
    path:'/about',
    component:About,
    name:'aboutLink',
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
        path:'/about/history',
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
    component:Login,
    name:'loginLink'
  },
  {
    path:'/register',
    component:Register,
    name:'registerLink'
  }
]




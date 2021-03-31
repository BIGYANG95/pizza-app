import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'


Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode:'history'
})
// 全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('未登录')
//     next('/login')
//   }
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

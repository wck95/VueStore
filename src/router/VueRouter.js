import Vue from 'vue'
//导入router插件
import VueRouter from 'vue-router'

import {Page401, Page404, Login, Home, Cart, Category, Profile } from './import'

//注册router
Vue.use(VueRouter);

const routes = [
  {
    path: '/login' , name: 'Login', component: Login,
    meta:{
      title: '登录页'
    }, 
  },
  {
    path: '' , name: 'Home', component: Home, 
    meta:{
      title: '首页'
    },
  },
    {
      path: '/home' , name: 'Home', component: Home, 
      meta:{
        title: '首页'
      },
    },
    {
      path: '/category' , name: 'Category', component: Category, 
      meta:{
        title: '分类'
      },
    },
    {
      path: '/cart' , name: 'Cart', component: Cart, 
      meta:{
        title: '购物车'
      },
    },
    {
      path: '/profile' , name: 'Profile', component: Profile,
      meta:{
        title: '我的'
      }, 
    },
    {
      path: '/401' , name: 'Page401', component: Page401, 
      meta:{
        title: '401'
      },
    },
    {
      path: '*' , name: 'Page404', component: Page404, 
      meta:{
        title: '404'
      },
    },
];

//创建router实例
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.matched[0].meta.title;
  next();
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//对外暴露router模块
export default router;

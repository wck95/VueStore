import Vue from 'vue'
//导入router插件
import VueRouter from 'vue-router'

import {routes} from "./routes_path"

//注册router
Vue.use(VueRouter);


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

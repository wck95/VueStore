
import {Page401, Page404, Home, Category, Cart, Profile,} from "./import"

const routes = [
  {
    path: '' ,name: 'Home', component: Home, 
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

export  {
  routes
}
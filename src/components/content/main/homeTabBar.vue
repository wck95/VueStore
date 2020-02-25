<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-inco" src="~images/tabbar/home.svg" alt="">
        <img slot="item-inco-active" src="~images/tabbar/home_active.svg" alt="">
        <font slot="item-text">首页</font>
      </tab-bar-item>
       <tab-bar-item path="/category">
        <img slot="item-inco" src="~images/tabbar/category.svg" alt="">
        <img slot="item-inco-active" src="~images/tabbar/category_active.svg" alt="">
        <font slot="item-text">分类</font>
      </tab-bar-item>
       <tab-bar-item path="/cart">
        <img slot="item-inco" src="~images/tabbar/cart.svg" alt="">
        <img slot="item-inco-active" src="~images/tabbar/cart_active.svg" alt="">
        <font slot="item-text">  购物车</font>
      </tab-bar-item>
       <tab-bar-item path="/profile" >
        <img slot="item-inco" src="~images/tabbar/profile.svg" alt="">
        <img slot="item-inco-active" src="~images/tabbar/profile_active.svg" alt="">
        <font slot="item-text">我的</font>
      </tab-bar-item>
    </tab-bar>
    
</template>

<script>

const TabBar = () => import('#common/tabbar/TabBar')
const TabBarItem = () => import('#common/tabbar/TabBarItem')
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
  
</style>

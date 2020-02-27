<template>
  <div id="app">
    <router-view></router-view>
    <home-tab-bar></home-tab-bar>
  </div>
</template>

<script>

  const HomeTabBar = () => import ('content/home/homeTabBar');

  export default {
    name: 'App',
    components: {
      HomeTabBar,
    }
  }
</script>

<style>
@import url('./assets/styles/base');
 
</style>

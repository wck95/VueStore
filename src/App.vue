<template>
  <div id="app">
    <router-view></router-view>
    <home-tab-bar></home-tab-bar>
  </div>
</template>

<script>

  const HomeTabBar = () => import ('content/main/homeTabBar');

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

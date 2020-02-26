<template>
  <div id="home">
    <nav-bar><div slot="center"><font> 购物街</font></div></nav-bar>
    <home-swiper :banners="banners" />
    <home-recommends :recommends="recommends"/> 
    <feature-view :recommends="recommends" :banners="banners"></feature-view>   
  </div>
</template>
<script>
  import NavBar from '#common/navbar/NavBar'
  import {getHomeMultidta} from 'network/home'
  import HomeSwiper from './childComps/HomeSwiper' 
  import HomeRecommends from './childComps/HomeRecommends' 
  import FeatureView from './childComps/FeatureViews' 

  export default {
    name: 'home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommends,
      FeatureView,
    },
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        features: [] , 
      }
    },
    created(){
     getHomeMultidta()
      .then( res => {
        this.result = res;
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        
      }).catch(rel => {
        console.log(rel);
      });
    }
  }
</script>
<style scoped>
  
</style>
<template>
  <div id="home">
    <nav-bar class="home-nve"><div slot="center"><font> 购物街</font></div></nav-bar>
    <home-swiper :banners="bannersPro"/> 
    <home-recommend :recommends="recommendsPro"/> 
    <feature-view/> 
    <tab-controller :tabs="tabsPro" @currentBtn="btnClick" class="tab-contrl"/> 
    <goods-list :goods="goodsPro"></goods-list>
    
  </div>
</template>
<script>
 
  import {getHomeMultidta,getHomeGoods} from 'network/home'
  import {HomeSwiper, HomeRecommend, FeatureView, NavBar, TabController,GoodsList} from './import'
  export default {
    name: 'home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabController,
      GoodsList,
    },
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        tabs: ["流行","新款","精选"],
        goods: {
          'pop' : {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop', 
      }
    },
    computed: {
      bannersPro() {
        return this.banners; 
      },
      recommendsPro() {
        return this.recommends;
      },
      tabsPro() {
        return this.tabs;
      },
      popsPro() {
        return this.goods['pop'].list;
      },
      newPro() {
        return this.goods['new'].list;
      },
      goodsPro() {
        return this.goods[this.currentType].list;
      },
    },
    created(){
      //请求多个数据
     this.getHomeMultidta();

     //请求商品数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new'); 
      this.getHomeGoods('sell'); 
    },

    methods: {

      // 事件监听相关方法
      btnClick(index){//监听鼠标点击tabcontrl的变化
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1: 
            this.currentType = 'new';
            break;
          case 2: 
            this.currentType = 'sell';
            break;    
        }
      },

      //网路请求相关方法 
      getHomeMultidta() {
        getHomeMultidta().then(res => {
          this.result = res;
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list ;
        });
      },
       getHomeGoods(type) {
         const page = this.goods[type].page+1;
         getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
           console.log(this.goods);
        });
      }
    }
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nve {
    background-color: #fff;
    position: fixed; 
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

  }
  .tab-contrl {
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>
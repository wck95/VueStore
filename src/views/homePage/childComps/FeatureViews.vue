<template>
   <div class="feature">
      <div class="title" >
        <font>本周流行</font>
      </div>
      <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item" >
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
      </div>
      <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item" >
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
      </div>
   </div>
</template>

<script>
  
  export default {
    name: 'FeatureView',
    props: {
      banners: {
        type: Array,
        default(){
          return []
        },
      },
      recommends: {
        type: Array,
        default(){
          return []
        },
      },
    },
     
  }
</script>

<style>

  .feature {
    width: 100%;
    text-align: center;
    font-size: 15px;
  }

  .title {
    font-size: 25px;
    margin: 3px auto;
  }
 
 .recommend {
    display:  flex;
 
    text-align: center;
    font-size: 15px;
  }
 .recommend-item {
    flex: 1;
    
   
 }
 .recommend-item img {
   width: 75%;
   height: 80%;
   margin: 0 auto;
  }
</style>

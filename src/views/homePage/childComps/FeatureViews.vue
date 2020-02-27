<template>
   <div class="feature">
      <a href="http://act.mogujie.com/zzlx67">
        <img src="@/assets/images/home/recommend_bg.jpg" alt="">
      </a> 
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

  .feature img{
    width: 100%;
     
  }

   
</style>

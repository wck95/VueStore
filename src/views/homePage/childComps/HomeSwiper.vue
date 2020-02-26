<template>
   <div>
    <swiper>
      <swiper-item  :key = "index"  v-for="(item,index) in banners " >
         <a :href="item.link">
           <img :src="item.image">
         </a>
      </swiper-item>
    </swiper>  
   </div>
</template>
<script>
  import Swiper from '#common/slideshow/Swiper' 
  import SwiperItem from '#common/slideshow/SwiperItem'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem,

    },
     props:{
       banners: {
         type: Array,
         default(){
           return []
         },
       }
     }
     
  }
</script>
<style scoped>

</style>
<template>
   <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item" >
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
   

  export default {
    name: 'HomeRecommend',
    props: {
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
  .recommend {
    display:  flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 5px 0 10px ;
    border-bottom: 10px solid #eee;
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

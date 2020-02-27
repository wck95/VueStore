<template>
   <div class="goods-item">
      <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" alt="">
      </a>   
        <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">${{goodsItem.price}}</span>
          <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
     
   </div>
</template>

<script>
  
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object ,
        default(){
          return []
        },
      },
      
    },
     
  }
</script>

<style>

  .goods-item  {
    padding-bottom: 35px;
    position: relative;
    width: 48%;
    padding-left: 10px;
     
  }

  .goods-item  img{
    width: 100%;
   
  }
  .goods-info {
     font-size: 12px;
     position: absolute;
     bottom: 5px;
     left: 0;
     right: 0;
     overflow: hidden;
     text-align: center; 
     padding-left: 10px;
  }
  
  .goods-info p{
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     text-align: center; 
     margin-bottom: 3px;
  }
  
  .goods-info .price{
    color: deeppink;
    margin-right: 22px;
  }

  .goods-info .cfav{
    color: deeppink;
     position: relative;
      
  }

  .goods-info ::before{
    content: '';
     position: absolute;
     left: -15px;
     top: 0;
     width: 14px;
     height: 14px;
     background: url("~images/common/collect.svg") 0 0/14px 14px;
  }
  
</style>

<template>
   <div class="tab-control">
      <div class="tab-contrl-item" v-for="(item,index) in tabs" :key="index" 
       :class="{active:index==currentIndex}" @click="btn(index)">
        <span>{{item}}</span>
      </div>
    
   </div>
</template>

<script>
  
  export default {
    name: 'TabController',
    props: {
      tabs: {
        type: Array,
        default(){
          return []
        },
      },
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      btn(index) {
        console.log("index="+index)
        this.currentIndex = index;
        console.log("currentIndex="+this.currentIndex);
        this.$emit('currentBtn',index);
      }
    } 
  }
</script>

<style>

  .tab-control{
    display: flex;
    font-size: 17px;
    text-align: center;
    height: 40px;
    line-height: 40px; 
    background-color: #fff;
    z-index: 9;
  }
  .tab-contrl-item {
    flex: 1;
    
  }
  .tab-contrl-item span{
    padding: 5px;    
  }
  .active {
    color: #DB7093;
  
  }
   .active span{
    border-bottom: 2px solid #DB7093;
  }
</style>

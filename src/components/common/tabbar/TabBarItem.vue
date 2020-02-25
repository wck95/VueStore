<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive" ><slot name="item-inco-active"></slot></div>
    <div v-else><slot name="item-inco"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive(){
      return this.$route.path===this.path;
    }
  },
  methods: {
    itemClick(){
      new Promise((reslove,reject)=> {
        setTimeout(function(){
          // reslove('hello Promise');
          reject('error');
        },1000);
      }).then(res => {
        console.log(res);
      }).catch(rej => {
        console.log(rej);
      });


      this.$router.push(this.path);
    }
  },
   
  
}
</script>
<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    height: 24px;
    width:  24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style> 
  
 
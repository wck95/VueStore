<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    background-color:#DB7093;
    text-align: center;
    box-shadow: 0 4px 1px rgba(#FFB6C1,0.644)
  }
  .left{
    width: 16.5%;
    
  }
  .right{
    width: 16.5%;
     
  }
  .center{
    flex: 1;
    font-size: 20px;
    color: white;
    margin: 12px auto;
  }
</style>
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style scoped>
 .tab-bar{
   display: flex;
   background-color: #dbd2d2;
   position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -4px 1px rgba(177, 171, 171, 0.644)
 }
</style> 
  
 
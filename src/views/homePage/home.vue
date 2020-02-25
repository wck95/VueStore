<template>
  <div id="home">
    <nav-bar>
      <div slot="center">
        <font> 购物街</font>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from '#common/navbar/NavBar'

  export default {
    name: 'home',
    components: {
      NavBar,
    }
  }
</script>
<style scoped>

</style>
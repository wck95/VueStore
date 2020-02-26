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
  import {getHomeMultidta} from 'network/home'

  export default {
    name: 'home',
    components: {
      NavBar,
    },
    data() {
      return {
        result: null,
        banner: [],
        recommends: []
      }
    },
    created(){
     getHomeMultidta()
      .then(res => {
        this.result = res;
        this.banner = res.data.banner;
        this.recommends = res.data.recommends;
        console.log(res);
      })
    }
  }
</script>
<style scoped>

</style>
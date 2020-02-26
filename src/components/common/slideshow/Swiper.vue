<template>
  <div class="hy-swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="swiper">
      <slot></slot>
      
    </div>
     <slot name=""></slot>
     <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
          <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
     </div>
  </div>
</template>
<script>
  export default {
    name: 'Swiper',
    props: {
      interval: {//轮播图多久走一次 默认3s
		    type: Number,
        default: 3000
      },
      animDuration: {//
		    type: Number,
        default: 300
      },
      moveRatio: {//用户点击滑动图片的1/4时自动跳转图片
        type: Number,
        default: 0.25
      },
      showIndicator: {//是否显示轮播图的进度条(此处时对应的点)
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        
      }
    },
    mounted: function () {

    },
    methods: {

    }
  }
</script>
<style scoped>


</style>

 
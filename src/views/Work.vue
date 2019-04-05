<template>
  <div class="work">
    <slick class="slick" ref="slick" :options="slickOptions">
      <div class="img-wrapper-one"></div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  components: Slick,
  metaInfo: {
    title: document.title + ' | Work', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.30,
        swipe: true
      },
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
.work {
  // display: flex;
  // position: relative;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  .slick {
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    .img-wrapper-one {
      background: url('../assets/syphix-logo-bg.jpg');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>

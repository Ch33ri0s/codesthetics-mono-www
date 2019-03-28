<template>
  <div class="work">
    <div class="project-carousel">
      <div class="project"><img src="../assets/syphix-logo-bg.jpg" alt="logo"></div>
      <div class="project"><img src="../assets/syphix-logo-bg.jpg" alt="logo"></div>
      <div class="project"><img src="../assets/syphix-logo-bg.jpg" alt="logo"></div>
    </div>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script>
import Flickity from 'flickity';

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted() {
    const elem = document.querySelector('.project-carousel');
    const projectCarousel = new Flickity(elem, {
      pageDots: false,
      // freeScroll: true,
      wrapAround: true,
      fullscreen: true,
      contain: true,
      prevNextButtons: false,
      cellAlign: 'left',
    });     
  }
}
</script>

<style lang="scss">
.work {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-carousel {
  background: rgba(0, 0, 0, .1);
  width: 100%;
  .project {
    display: block;
    width: 100%;
    // height: 600px;
    img {
      display: block;
      max-height: 100%;
      margin: 0 auto;
      max-width: 100%;
    }
  }
}
</style>

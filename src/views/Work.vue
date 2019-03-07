<template>
  <div class="work">
    <div class="project-carousel">
      <div v-for="(project, index) in projects" :key="index" class="project">{{project.title}}</div>

    </div>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script>
import Flickity from 'flickity';

export default {
  data () {
    return {
      projects: [
        { title: 'test'},
        { title: 'test'},
        { title: 'test'},
      ]
    }
  },
  mounted() {
    const elem = document.querySelector('.project-carousel');
    const myproj = new Flickity(elem, {
        pageDots: true,
        wrapAround: false,
        prevNextButtons: false
    });     
  }
}
</script>

<style lang="scss">
.project-carousel {
  width: 100%;
  height: 100%;
  .project {
    width: 100px;
    height: 100px;
    background: lightgray;
    border: 2px solid white #212121;
  }
}
</style>

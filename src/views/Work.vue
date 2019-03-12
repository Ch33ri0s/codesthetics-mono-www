<template>
  <div class="work">
    <div class="project-carousel">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <span class="project-title">{{project.title}}</span>
        <div class="project-img-wrapper">
          <img class="project-img" :src="project.image">
        </div>
      </div>
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
        { title: 'test', image: "../assets/logo.png"},
        { title: 'test', image: "https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        { title: 'test', image: "https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      ]
    }
  },
  mounted() {
    console.log(this.projects.image);
    const elem = document.querySelector('.project-carousel');
    const projectCarousel = new Flickity(elem, {
      setGallerySize: true,
      pageDots: true,
      wrapAround: true,
      freeScroll: false,
      fullscreem: true,
      prevNextButtons: true,
      cellAlign: 'left',
    });     
  }
}
</script>

<style lang="scss">

.project-carousel {
  width: 100%;
  height: 100%;
  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-right: 20px;
    .project-img-wrapper {
      width: 100%;
      // height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="work">
    <div class="slide">
      <div class="img-wrapper-one"></div>
      <div class="img-wrapper-two"></div>
    </div>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: document.title + ' | Work', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  }
}
</script>

<style lang="scss">
.work {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  .slide{
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    .img-wrapper-one {
      display: block;
      background: url('../assets/syphix-logo-bg.jpg');
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
    .img-wrapper-two {
      display: block;
      background: url('../assets/polyshapes.jpg');
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>

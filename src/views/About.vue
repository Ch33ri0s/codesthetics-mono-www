<template>
  <div class="about">
    <div class="content-wrapper">
      <div class="text-wrap">
        <div class="title">Hello Stranger!</div>
        <p>
          Not everybody can say they love to code AND design.  And yes, I'm human.  Also an avid gamer,
          reader, tech enthusiast, and design minimalist with years of experience in Adobe Photoshop, 
          Adobe Illustrator, and Adobe XD.  Proud developer with a deep understanding of JavaScript,
          SCSS, Vue, React, and some C#.
        </p>
      </div>
      <div class="image-wrapper">
        <img src="../assets/tcp.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about {
  .content-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    .text-wrap {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      height: 100%;
    }
    .image-wrapper {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

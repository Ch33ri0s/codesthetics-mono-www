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
      <div class="image-wrap"></div>
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
  height: 100%;
  width: 100%;
  .content-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    position: relative;
    .text-wrap {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 300px;
      z-index: 1;
    }
    .image-wrap {
      width: 300px;
      height: 100px;
      background: url('../assets/tcp.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>

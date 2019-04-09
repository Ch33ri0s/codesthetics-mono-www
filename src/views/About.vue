<template>
  <div class="about">
    <h1>ABOUT</h1>
    <div class="textwrapper">
      <h2>Hey, I'm Tenyson.</h2>
      <p>A tech nerd, PC Builder, diehard developer, avid gamer, passionate designer, Utah Jazz fanatic, and athlete.  I enjoy working with people and creating awesome experiences for users; both visually and emotionally.</p>
    </div>
    <div class="img-wrapper">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: document.title + ' | About', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
}
</script>

<style lang="scss">
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  .img-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: url('../assets/tenyson_edited.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .35;
    background-position: center center;
  }
  h1 {
    position: absolute;
    color: rgba(0, 0, 0, .05);
    font-size: 35vw;
    bottom: 0;
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 5%;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none;
  }
  .textwrapper {
    position: relative;
    border-radius: 20px;
    padding: 20px;
    color: white;
    width: 400px;
    background: #212121;
    box-shadow: 0 0 30px rgba(0, 0, 0, .35);
    max-width: 100%;
    height: 200px;
    h2 {
      width: 500px;
      max-width: 100%;
    }
    p {
      font-family: Helvetica, sans-serif;
      margin-top: 20px;
      line-height: 1.3;
      width: 500px;
      text-align: justify;
      font-size: 16px;
      max-width: 100%;
    }
  }
}
</style>

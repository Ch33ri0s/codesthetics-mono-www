<template>
  <div class="about">
    <h1>ABOUT</h1>
    <div class="textwrapper">
      <h2>Hello, my name is Tenyson!</h2>
      <p>I'm obsessed with creating and building awesome projects.  At 13, I introduced myself to JASS(Which is similar to C++) and used it inside the Warcraft 3 Custom Map Editor.  A couple years ago I got a little curious with web development and have been loving it ever since!</p>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 600px;
  margin: auto;
  overflow: hidden;
  h1 {
    position: absolute;
    color: rgba(0, 0, 0, .02);
    font-size: 35vw;
    left: 5%;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none;
  }
  .textwrapper {
    background:linear-gradient(to right, rgba(0, 0, 0, .45), rgba(0, 0, 0, .35), rgba(0, 0, 0, .45));
    border-radius: 20px;
    padding: 20px;
    color: white;
    width: 100%;
    max-width: 100%;
    height: 300px;
    h2 {
      width: 500px;
      max-width: 100%;
    }
    p {
      font-family: Helvetica, sans-serif;
      margin-top: 20px;
      line-height: 1.3;
      width: 500px;
      text-align: left;
      max-width: 100%;
    }
  }
}
</style>

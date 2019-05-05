<template>
  <div class="home">
    <span class="header"></span>
    <h3>UI/UX Developer</h3>
    <p id="intro">I love to create and build cool projects</p>
    <h1>HOME</h1>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      gameUrl: 'https://www.simmer.io/@Ch33ri0s/boxdrop'
    }
  },
  metaInfo: {
    title: document.title + ' | Home', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  methods: {
      handleHeader() {
      var headerText = 'Tenyson C. Partridge';
      var myHeader = document.querySelector('.header');
      for (var i = 0; i < headerText.length; i++){
        (function(e) {
          setTimeout(() => {
            myHeader.innerHTML += headerText[e];
          }, i * 100);
        }(i));
      }
    }
  },
  mounted() {
    this.handleHeader();
  }
}
</script>

<style lang="scss">

#intro {
  padding: 20px;
  font-size: 21px;
  padding-left: 0;
  color: lighten($color: #424242, $amount: 5%);
  text-align: justify;
}

.home {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .game {
    padding: 20px;
    a {
      &:hover {
        cursor: pointer;
      }
    }
  }
  h1 {
    position: absolute;
    color: rgba(0, 0, 0, .02);
    font-size: 35vw;
    bottom: 0;
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 10%;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none;
  }
}

.header {
  animation: slide 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0;
  font-weight: bold;
  font-size: 48px;
  font-family: 'Courier New', Courier, monospace;
}
.header, h3 {
  color: #424242;
}
h3 {
  font-size: 40px;
  padding-bottom: 20px;
  font-weight: lighter;
  border-bottom: 1px solid #424242;
  animation: slide 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 730px) {
  .home {
    padding-left: 50px;
  }
  .header {
    font-size: 28px;
  }
  h3 {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  .home {
    padding-left: 20px;
  }
}
</style>

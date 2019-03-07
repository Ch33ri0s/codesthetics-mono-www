<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/work"><i class="fas fa-image"></i></router-link>
      <router-link to="/contact"><i class="fas fa-envelope"></i></router-link>
    </div>
    <div class="body-wrapper">
      <router-view/>
    </div>
    <div id="footer">
      <span>Made with <i class="fas fa-heart"></i></span>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    mouse() {
      window.addEventListener('mousemove', function(e){
        // console.log(e.clientX, e.clientY);
        var xPos = e.clientX;
        var yPos = e.clientY;
        var box = document.createElement('div');
        box.className = 'box';
        box.style.top = xPos + 'px';
        box.style.left = yPos + 'px';
      });
    }
  },
  // mounted() {
  //   this.mouse();
  // }
};
</script>


<style lang="scss">
@keyframes slide {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slideTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes slideBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}

*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  overflow: hidden;
  -webkit-text-stroke: .35px #616161;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: "t26-carbon", "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: black;
  background: #212121;
  width: 100vw;
  height: 100vh;
  padding-right: 200px;
  padding-left: 200px;
  @media (max-width: 1000px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 950px) {
    padding: 0;
  }
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 2px;
  padding-right: 2px;
  max-width: 1400px;
  margin: auto;

  a {
    color: #757575;
    position: relative;
    text-decoration: none;
    font-size: 40px;
    animation: slideTop 2s ease;
    transition: all 1s ease;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -10px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      background: linear-gradient(to bottom right, #FFB74D, #FF8A65);
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.25s ease-in-out 0s;
      transition: all 0.25s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    &:hover:after {
      visibility: visible;
    }
  }
}

#footer {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  max-width: 1400px;
  margin: auto;
  padding-left: 2px;
  padding-right: 2px;
  @media (max-width: 450px) {
    justify-content: center;
    padding: 0;
  }

  span {
    color: #616161;
    font-size: 12px;
    animation: slideBottom 2s ease;
    i {
      color: #FF0266;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 10px;
    margin: 0;
    animation: slideBottom 2s ease;
    li {
      padding-left: 10px;
      padding-right: 10px;
      a {
        font-size: 12px;
        position: relative;
        text-decoration: none;
        color: #616161;
        @media (max-width: 450px) {
          font-size: 14px;
        }
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -10px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          background: linear-gradient(to bottom right, #FFB74D, #FF8A65);
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.25s ease-in-out 0s;
          transition: all 0.25s ease-in-out 0s;
        }

        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
        &:hover:after {
          visibility: visible;
        }
      }
    }
  }
}

.body-wrapper {
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  border: 5px solid #424242;
  border-radius: 20px;
  background: linear-gradient(to bottom right, #FFB74D, #FF8A65);
  box-shadow: 0 0 30px rgba(0, 0, 0, .35);
  margin: auto;
  width: 100%;
  max-width: 1400px;
  height: 70%;
  -webkit-animation: flicker-in-2 2s linear both;
  animation: flicker-in-2 2s linear both;
}

.box {
  display: absolute;
  // position: relative;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: #f2f2f2;
  z-index: 200;
  // transition: all 1s ease;
}

@-webkit-keyframes flicker-in-2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    // box-shadow: none;
  }
  10.1% {
    opacity: 1;
    // box-shadow: none;
  }
  10.2% {
    opacity: 0;
    // box-shadow: none;
  }
  20% {
    opacity: 0;
    // box-shadow: none;
  }
  20.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    // box-shadow: none;
  }
  30% {
    opacity: 0;
    // box-shadow: none;
  }
  30.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    // box-shadow: none;
  }
  45% {
    opacity: 0;
    // box-shadow: none;
  }
  45.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    // box-shadow: none;
  }
  57% {
    opacity: 0;
    // box-shadow: none;
  }
  57.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3);
  }
  60% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3);
  }
  60.1% {
    opacity: 0;
    // box-shadow: none;
  }
  65% {
    opacity: 0;
    // box-shadow: none;
  }
  65.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    // box-shadow: none;
  }
  77% {
    opacity: 0;
    // box-shadow: none;
  }
  77.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    // box-shadow: none;
  }
  86% {
    opacity: 0;
    // box-shadow: none;
  }
  86.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}
@keyframes flicker-in-2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    // box-shadow: none;
  }
  10.1% {
    opacity: 1;
    // box-shadow: none;
  }
  10.2% {
    opacity: 0;
    // box-shadow: none;
  }
  20% {
    opacity: 0;
    // box-shadow: none;
  }
  20.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    // box-shadow: none;
  }
  30% {
    opacity: 0;
    // box-shadow: none;
  }
  30.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    // box-shadow: none;
  }
  45% {
    opacity: 0;
    // box-shadow: none;
  }
  45.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    // box-shadow: none;
  }
  57% {
    opacity: 0;
    // box-shadow: none;
  }
  57.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3);
  }
  60% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3);
  }
  60.1% {
    opacity: 0;
    // box-shadow: none;
  }
  65% {
    opacity: 0;
    // box-shadow: none;
  }
  65.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    // box-shadow: none;
  }
  77% {
    opacity: 0;
    // box-shadow: none;
  }
  77.1% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    // box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    // box-shadow: none;
  }
  86% {
    opacity: 0;
    // box-shadow: none;
  }
  86.1% {
    opacity: 1;
    // box-shadow: 0 0 50px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.25), 0 0 110px rgba(255, 255, 255, .15), 0 0 100px rgba(255, 255, 255, 0.15);
  }
  100% {
    opacity: 1;
    // box-shadow: 0 0 50px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.25), 0 0 110px rgba(255, 255, 255, .15), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}

</style>

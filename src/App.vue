<template>
  <div id="app">
    <div class="line1"></div>
    <div class="line2"></div>
    <div id="nav">
      <router-link to="/">
        <i class="fas fa-home"></i>
        <h6>home</h6>
      </router-link>
      <router-link to="/work">
        <i class="fas fa-image"></i>
        <h6>work</h6>
      </router-link>
      <router-link to="/contact">
        <i class="fas fa-envelope"></i>
        <h6>contact</h6>
      </router-link>
      <router-link to="/about">
        <i class="fas fa-user"></i>
        <h6>about</h6>
      </router-link>
    </div>
    <div class="body-wrapper">
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <div id="footer">
      <span>Made with <i class="fas fa-heart"></i> {{year}}</span>
      <ul>
        <li><a href="https://www.facebook.com/tenyson.partridge" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/codesthetics" target="_blank">Instagram</a></li>
        <li><a href="https://www.twitter.com/codesthetics" target="_blank">Twitter</a></li>
        <li><a href="https://www.github.com/ch33ri0s" target="_blank">Github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear()
    }
  },
  methods: {
    mouse() {
      window.addEventListener('mousemove', function(e){
        var xPos = e.clientX;
        var yPos = e.clientY;
        var box = document.createElement('div');
        box.className = 'box';
        box.style.top = xPos + 'px';
        box.style.left = yPos + 'px';
      });
    }
  },
};
</script>


<style lang="scss">

.line1 {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 1vw;
  height: 5%;
  background: linear-gradient(to right, #FFB74D, #FF8A65);
}
.line2 {
  display: block;
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 0;
  margin: auto;
  width: 1vw;
  height: 5%;
  // z-index: -1;
  background: linear-gradient(to right, #81C784, #4FC3F7);
}

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

.slide-fade-enter-active {
  transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10%);
  opacity: 0;
}

*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
}

#app {
  font-family: "t26-carbon", "Courier New", Courier, monospace;
  background: radial-gradient(#424242, #212121);
  width: 100vw;
  height: 100vh;
  padding-right: 200px;
  padding-left: 200px;
  overflow: hidden;
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
  img {
    width: 50px;
    height: 50px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #757575;
    position: relative;
    text-decoration: none;
    font-size: 40px;
    animation: slideTop 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    h6 {
      font-size: 14px;
      text-transform: uppercase;
      padding-top: 5px;
    }
    &.router-link-exact-active  {
      color: lighten($color: #757575, $amount: 35%);
    }
    &:hover {
      color: lighten($color: #757575, $amount: 35%);
    }
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
    color: #757575;
    font-size: 14px;
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
        font-size: 14px;
        position: relative;
        font-weight: bolder;
        text-decoration: none;
        color: #757575;
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
          -webkit-transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
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
  display: block;
  position: relative;
  overflow: hidden;
  border: 5px solid #424242;
  border-radius: 20px;
  background: linear-gradient(-45deg, #23A6D5, #23D5AB);
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
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: #f2f2f2;
  z-index: 200;
}

@-webkit-keyframes flicker-in-2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
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

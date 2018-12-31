<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
    <div class="body-wrapper">
      <span class="header"></span>
      <h3>UI/UX Developer</h3>
    </div>
    <div id="footer">
      <span>Made with Luv</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleHeader() {
      var headerText = 'Tenyson C. Partridge';
      var myHeader = document.querySelector('.header');
      console.log(myHeader);
      for (var i = 0; i < headerText.length; i++){
        (function(n) {
          setTimeout(function(){
            myHeader.innerHTML += headerText[n];
          }, i * 100);
        }(i));
      }
    }
  },
  mounted(){
    this.handleHeader();
  }
}
</script>


<style lang="scss">

*, html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  // font-family: 'Courier New', Helvetica, Arial, sans-serif;
  font-family: 't26-carbon', 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: black;
  background: black;
  width: 100vw;
  height: 100vh;
  padding-right: 200px;
  padding-left: 200px;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;

  a {
    color: white;
    text-decoration: none;
    font-size: 48px;
    font-weight: bolder;
    text-transform: uppercase;
  }
}

#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  span {
    color: white;
    font-size: 12px;
    font-weight: lighter;
  }
}

.body-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 10px solid white;
  padding-left: 150px;
  width: 100%;
  height: 500px;
  transition: all 1s ease;
  span, h3 {
    color: white;
  }
  span {
    font-size: 60px;
  }
  h3 {
    font-size: 48px;
    font-weight: lighter;
  }
}
</style>

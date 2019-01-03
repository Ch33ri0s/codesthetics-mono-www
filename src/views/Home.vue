<template>
  <div class="home">
    <span class="header"></span>
    <h3>UI/UX Developer</h3>
  </div>
</template>

<script>

export default {
  name: 'home',
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

.home {
  width: 100%;
  padding-left: 100px;
}

.header {
  animation: slide 1s ease;
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
  animation: slide 1s ease;
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

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
  font-weight: bold;
  font-size: 48px;
  font-family: 'Courier New', Courier, monospace;
}
.header, h3 {
  color: white;
  padding: 1rem;
}
h3 {
  font-size: 40px;
  font-weight: lighter;
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
</style>

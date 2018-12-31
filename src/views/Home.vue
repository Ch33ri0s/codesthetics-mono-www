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
}
span, h3 {
  color: white;
}
span {
  font-weight: bold;
  font-size: 60px;
}
h3 {
  font-size: 48px;
  font-weight: lighter;
  animation: slide 1s ease;
}
</style>

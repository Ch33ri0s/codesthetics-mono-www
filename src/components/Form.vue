<template>
  <div class="form">
    <form name="contact" id="form" method="POST" action="https://formspree.io/tenysonpartridge@gmail.com">
      <h2>Shoot me a message!</h2>
      <input placeholder="Name" type="name" name="name" required>
      <input placeholder="Email" type="email" name="email" required>
      <input placeholder="Subject" type="text" name="subject" required>
      <input class="message" placeholder="Message" type="text" name="message" required>
      <button type="submit" value="Send" class="btn">Shoot!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {

    }
  },
  methods: {
    formAnimation(){
      var myForm = document.querySelector('#form');
      for(let i = 0; i < myForm.children.length - 1; i++){
        (function(e){
          setTimeout(() => {
            myForm[e].style.transform = 'translate(0%)';
            myForm[e].style.visibility = 'visible';
          }, i * 300);
        }(i));
      }
    },
    handleButtonClick() {
      document.querySelector('.btn').addEventListener('click', function(event) {
        var rect = event.target.getBoundingClientRect();
        var posX = event.clientX - rect.left;
        var posY = event.clientY - rect.top;
        var bullet = document.createElement('div');
        bullet.classList.add('bullet');
        this.appendChild(bullet);
        bullet.style.top += posY + 'px';
        bullet.style.left += posX + 'px';
      });
    }
  },
  mounted() {
    this.formAnimation();
    this.handleButtonClick();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.form {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #424242;
  form {
    display: flex;
    flex-direction: column;
    position: relative;
    h2 {
      margin: 20px auto;
    }
    input {
      position: relative;
      background: none;
      font-family: "t26-carbon", "Courier New", Courier, monospace;
      outline: none;
      border: none;
      width: 400px;
      padding: 20px 20px 20px 10px;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 2px solid #424242;
      color: #424242;
      transform: translateY(300%);
      visibility: hidden;
      transition: all .45s cubic-bezier(0.215, 0.610, 0.355, 1);
      -webkit-transition: all .45s cubic-bezier(0.215, 0.610, 0.355, 1);
      @media (max-width: 450px) {
        width: 275px;
        font-size: 16px;
      }
      &::placeholder {
        color: #424242;
        font-family: "t26-carbon", "Courier New", Courier, monospace;
        font-weight: lighter;
        font-size: 16px;
      }
    }
  }
}
.btn {
  position: relative;
  margin: 40px auto;
  font-size: 18px;
  background: #4DD0E1;
  color: #f2f2f2;
  font-family: "t26-carbon", "Courier New", Courier, monospace;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  font-weight: bold;
  border-radius: 5px;
  transform: translateY(300%);
  visibility: hidden;
  border: none;
  outline: none;
  padding: 10px 50px 10px 50px;
  transition: all .45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: url('https://img.icons8.com/material-two-tone/48/000000/accuracy.png')18.9 18.9, auto;
  }
  &:active {
    transform: scale(1, 1);
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .16);
  }
  .bullet {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: url('../assets/hole.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 200;
    transform: scale(1, 1);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:before {
      transform: scale(1.5, 1.5);
    }
    &:after {
      transform: scale(1, 1);
    }
  }
}

</style>

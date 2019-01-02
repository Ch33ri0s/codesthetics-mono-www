<template>
  <div class="form">
    <form id="form" action.preventDefault="submit">
      <h2>Shoot me a message!</h2>
      <input placeholder="Name" type="text" required>
      <input placeholder="Email" type="text" required>
      <input placeholder="Subject" type="text" required>
      <input class="message" placeholder="Message" type="text" required>
      <button class="btn">Shoot!</button>
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
      for(var i = 0; i < myForm.children.length; i++){
        (function(e){
          setTimeout(() => {
           myForm[e].style.transform = 'translate(0%)';
           myForm[e].style.visibility = 'visible';
          }, i * 1000);
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
  color: white;
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
      border-bottom: 2px solid white;
      color: white;
      transform: translateY(300%);
      visibility: hidden;
      transition: all .65s cubic-bezier(0.215, 0.610, 0.355, 1);
      -webkit-transition: all .65s cubic-bezier(0.215, 0.610, 0.355, 1);
      @media (max-width: 450px) {
        width: 250px;
        font-size: 16px;
      }
      &::placeholder {
        color: white;
        font-family: "t26-carbon", "Courier New", Courier, monospace;
        font-weight: lighter;
        font-size: 16px;
      }
    }
  }
}
.btn {
  position: relative;
  margin: 30px auto;
  font-size: 18px;
  background: white;
  font-family: "t26-carbon", "Courier New", Courier, monospace;
  font-weight: bold;
  transform: translateY(300%);
  visibility: hidden;
  border: none;
  outline: none;
  padding: 5px 50px 5px 50px;
  transition: all .65s ease;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: url('https://img.icons8.com/material-two-tone/48/000000/accuracy.png')18.9 18.9, auto;	
  }
  &:active {
    transform: scale(1, 1);
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

<template>
  <div class="form">
    <form id="form" action.preventDefault="submit">
      <h2>Shoot me a message!</h2>
      <input placeholder="Name" type="text">
      <input placeholder="Email" type="text">
      <input placeholder="Subject" type="text">
      <input class="message" placeholder="Message" type="text">
      <button class="btn">Shoot it</button>
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
      console.log(myForm.children);
      for(var i = 0; i < myForm.children.length - 1; i++){
        (function(e){
          setTimeout(() => {
           myForm[e].style.transform = 'translate(0%)';
           myForm[e].style.visibility = 'visible';
          }, i * 1000);
        }(i));
      }
    }
  },
  mounted() {
    this.formAnimation();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.form {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  form {
    display: flex;
    flex-direction: column;
    h2 {
      margin: 20px auto;
    }
    input {
      background: none;
      font-family: "t26-carbon", "Courier New", Courier, monospace;
      outline: none;
      border: none;
      width: 400px;
      padding: 15px 20px 15px 10px;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 2px solid white;
      color: white;
      transform: translateY(300%);
      visibility: hidden;
      transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1);
      -webkit-transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1);
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
  margin: 30px auto;
  font-size: 18px;
  background: white;
  border: none;
  outline: none;
  padding: 5px 50px 5px 50px;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: url('https://img.icons8.com/material-two-tone/48/000000/accuracy.png')25 15, auto;	
  }
}

</style>

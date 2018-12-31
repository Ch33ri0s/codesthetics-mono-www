<template>
  <div class="form">
    <form action.preventDefault="submit">
      <input placeholder="Name" type="text">
      <input placeholder="Email" type="text">
      <input placeholder="Subject" type="text">
      <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form'
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
  animation: name duration timing-function delay iteration-count direction fill-mode;
  // flex-direction: column;
  color: white;
  form {
    width: 300px;
    height: 100%;
  }

  form input {
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    font-family: "t26-carbon", "Courier New", Courier, monospace;
    font-weight: bolder;
    padding: 10px 5px 10px 5px;
    background: none;
    width: 300px;
    margin: 10px;
    font-size: 18px;
    color: white;
    &::placeholder {
      font-size: 18px;
      color: white;
      font-family: 't26-carbon', 'Courier New', Courier, monospace;
      font-weight: lighter;
      padding: 0;
      margin: auto;
    }
  }
}



</style>

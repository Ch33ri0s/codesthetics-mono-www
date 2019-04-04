<template>
  <div class="contact">
    <h1>MESSAGE</h1>
    <Form/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'Contact',
  components: {
    Form
  }
}
</script>

<style lang="scss">

.contact {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  h1 {
    position: absolute;
    color: rgba(0, 0, 0, .02);
    font-size: 35vw;
    left: 5%;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none;
  }
}

</style>

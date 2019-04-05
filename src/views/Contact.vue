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
  },
  metaInfo: {
    title: document.title + ' | Contact', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
}
</script>

<style lang="scss">

.contact {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
  h1 {
    position: absolute;
    color: rgba(0, 0, 0, .02);
    font-size: 35vw;
    bottom: 0;
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 5%;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none;
  }
}

</style>

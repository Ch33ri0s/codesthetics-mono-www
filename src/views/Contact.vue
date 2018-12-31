<template>
  <div class="contact">
    <Form/>
  </div>
</template>

<script>
// import Form from '@/components/Form.vue'
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
}

</style>

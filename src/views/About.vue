<template>
  <div class="about">
    <div class="textwrapper">
      <h2>UI/UX Developer</h2>
      <p>Developer, designer, gamer, tech enthusiast and computer hardware fanatic.  I've been a computer geek since I was 8 years old.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 600px;
  margin: auto;

  .textwrapper {
    background:rgba(0, 0, 0, .35);
    border-radius: 20px;
    padding: 20px;
    color: white;
  }
}
</style>

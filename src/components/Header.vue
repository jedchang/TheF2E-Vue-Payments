<template>
  <div class="header">
    <div class="step">
      <div class="color-1"></div>
      <div class="color-2"></div>
      <div class="color-3"></div>
      <div class="color-4"></div>
      <div class="color-5"></div>
      <div class="color-6"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  height: 15px;
}
.step {
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  .color-1 {
    width: 13.6%;
    background-color: #b3aba6;
  }
  .color-2 {
    width: 21.4%;
    background-color: #ff8f14;
  }
  .color-3 {
    width: 9.5%;
    background-color: #173060;
  }
  .color-4 {
    width: 22.5%;
    background-color: #f65453;
  }
  .color-5 {
    width: 18.5%;
    background-color: #cc251b;
  }
  .color-6 {
    width: 14.5%;
    background-color: #62a1d2;
  }
}
</style>

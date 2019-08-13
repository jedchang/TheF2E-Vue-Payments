<template>
  <router-link
    to="/order-payByShop"
    class="btn-select btn-paymentShop"
  >
    <img
      src="../assets/icon_PayByShop.svg"
      alt=""
    >
    <span>使用超商代碼付款</span>
  </router-link>
</template>

<script>
export default {
  name: 'PaymentShop'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_paymentBtn.scss';
</style>
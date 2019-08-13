<template>
  <router-link
    to="/order-payByWebATM"
    class="btn-select btn-paymentWeb"
  >
    <img
      src="../assets/icon_PayByATM.svg"
      alt=""
    >
    <span>使用 WebATM 付款</span>
  </router-link>
</template>

<script>
export default {
  name: 'PaymentWeb'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_paymentBtn.scss';
</style>

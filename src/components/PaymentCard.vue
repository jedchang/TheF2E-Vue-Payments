<template>
  <router-link
    to="/order-payByCard"
    class="btn-select btn-paymentCard"
  >
    <img
      src="../assets/icon_PayByCard.svg"
      alt=""
    >
    <span>使用信用卡付款</span>
  </router-link>
</template>

<script>
export default {
  name: 'PaymentCard'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_paymentBtn.scss';
</style>

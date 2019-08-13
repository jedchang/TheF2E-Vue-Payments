<template>
  <div class="payment-type">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3 class="sub-title"> 選擇付款方式</h3>
        </div>
        <div class="col-md-4 col-sm-12">
          <PaymentCard />
        </div>
        <div class="col-md-4 col-sm-12">
          <PaymentWeb />
        </div>
        <div class="col-md-4 col-sm-12">
          <PaymentShop />
        </div>
        <div class="col-md-12 col-sm-12">
          <Notice />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PaymentCard from '@/components/PaymentCard.vue';
import PaymentWeb from '@/components/PaymentWeb.vue';
import PaymentShop from '@/components/PaymentShop.vue';
import Notice from '@/components/Notice.vue';

export default {
  name: 'PaymentType',
  components: {
    PaymentCard,
    PaymentWeb,
    PaymentShop,
    Notice
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';

.payment-type {
  width: 100%;
  margin: 40px 0 80px 0;

  .sub-title {
    font-size: 22px;
    margin-bottom: 10px;
    color: $primaryColor;
    font-weight: 600;
  }
}
</style>

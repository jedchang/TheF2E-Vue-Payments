<template>
  <div class="order-pay-web">
    <Header />
    <StepInfoBar />
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
        </div>
      </div>
    </div>
    <OrderPayWebForm />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import StepInfoBar from '@/components/StepInfoBar.vue';
import PaymentCard from '@/components/PaymentCard.vue';
import PaymentWeb from '@/components/PaymentWeb.vue';
import PaymentShop from '@/components/PaymentShop.vue';
import OrderPayWebForm from '@/components/OrderPayWebForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'OrderPayCard',
  components: {
    Header,
    StepInfoBar,
    PaymentCard,
    PaymentWeb,
    PaymentShop,
    OrderPayWebForm,
    Footer
  },
  mounted() {
    let steps = document.querySelector('.steps');
    let step1 = document.querySelector('.step-1');
    let step2 = document.querySelector('.step-2');
    let txt1 = document.querySelector('.txt-1');
    let btnCard = document.querySelector('.btn-paymentWeb');
    steps.classList.add('current');
    step1.classList.add('current');
    step2.classList.add('current');
    btnCard.classList.add('active');
    txt1.style.color = '#62a1d2';
  }
};
</script>

<style lang="scss" scoped>
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




<template>
  <div class="home">
    <Header />
    <StepInfoBar />
    <ConfirmOrder></ConfirmOrder>
    <PaymentType />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import StepInfoBar from '@/components/StepInfoBar.vue';
import ConfirmOrder from '@/components/ConfirmOrder.vue';
import PaymentType from '@/components/PaymentType.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    StepInfoBar,
    ConfirmOrder,
    PaymentType,
    Footer
  },
};
</script>

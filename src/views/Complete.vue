<template>
  <div class="complete">
    <Header />
    <StepInfoBar />
    <div class="wrap">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-8 col-12 offset-2">
            <div class="complete-info">
              <h3 class="sub-title">付款完成</h3>
              <p>感謝您的訂購，我們將盡快為您處理您的訂單:)</p>
              <router-link
                to="/"
                class="btn btn-sumbit"
              >
                <button type="button">回首頁</button>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import StepInfoBar from '@/components/StepInfoBar.vue';

import Footer from '@/components/Footer.vue';

export default {
  name: 'Complete',
  components: {
    Header,
    StepInfoBar,
    Footer
  },
  mounted() {
    let steps = document.querySelector('.steps');
    let step1 = document.querySelector('.step-1');
    let step2 = document.querySelector('.step-2');
    let step3 = document.querySelector('.step-3');
    let txt1 = document.querySelector('.txt-1');
    let txt2 = document.querySelector('.txt-2');
    steps.classList.add('current');
    step1.classList.add('current');
    step2.classList.add('current');
    step3.classList.add('current');
    txt1.style.color = '#62a1d2';
    txt2.style.color = '#62a1d2';
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';

.complete {
  width: 100%;
  height: 100vh;
  background-color: rgba(179, 171, 166, 0.2);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.wrap {
  width: 100%;
  height: 100%;
  margin: 40px 0 0px 0;
  // background-color: rgba(179, 171, 166, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .complete-info {
    padding: 30px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #505050;
  }

  .sub-title {
    font-size: 22px;
    margin-bottom: 10px;
    color: $primaryColor;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  .btn {
    width: 180px;
    padding: 12px;
    background-color: #62a1d2;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 25px;
    margin-top: 25px;
    &:hover {
      background-color: #3271a1;
    }
    button {
      border: 0;
      background: transparent;
      color: #fff;
      font-weight: 600;
      &:focus {
        outline: none;
      }
    }
  }
  .btn-sumbit {
    background-color: #ff8f14;
    &:hover {
      background-color: #b65e00;
    }
  }
}
</style>




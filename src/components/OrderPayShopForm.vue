<template>
  <div class="order-pay-shop-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
          <div class="section">
            <p>需自行至超商機台輸入代碼，產生繳費單據後至櫃檯繳費。</p>
            <div class="info-txt">
              <div class="total-price">
                <div class="txt">應付金額</div>
                <!-- <div class="sum">$2,000</div> -->
                <div class="sum">$ {{totalAll}}</div>
              </div>
              <div class="select-shops">
                <div class="txt">選擇超商</div>
                <div class="img-group">
                  <img
                    src="../assets/icon_7-11@2x.png"
                    alt=""
                  >
                  <img
                    src="../assets/icon_FM@2x.png"
                    alt=""
                  >
                  <img
                    src="../assets/icon_OK@2x.png"
                    alt=""
                  >
                  <img
                    src="../assets/icon_Hilife@2x.png"
                    alt=""
                  >
                </div>
              </div>
            </div>
            <Notice />
            <div class="btn-all col-12">
              <router-link
                to="/"
                class="btn col-lg-5 col-md-5 col-sm-5 col-5"
              >
                <button type="button">返回訂單</button>
              </router-link>
              <router-link
                to="/complete"
                class="btn btn-sumbit col-lg-5 col-md-5 col-sm-5 col-5"
              >
                <button type="button">送出</button>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notice from '@/components/Notice.vue';
// 使用 getters
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'OrderPayShopForm',
  components: {
    Notice
  },
  data() {
    return {};
  },
  computed: {
    // 解構 vuex getters
    ...mapGetters(['totalSum1', 'totalSum2', 'totalAll'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_paymentBtn.scss';

.order-pay-shop-form {
  width: 100%;
  background-color: rgba(179, 171, 166, 0.2);
  padding: 30px 0;

  .section {
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    color: #505050;
    @include small {
      flex-direction: column;
    }
    p {
      font-size: 16px;
      width: 100%;
      margin-bottom: 20px;
      font-weight: 600;
      @include small {
        font-size: 14px;
      }
    }
  }

  .info-txt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @include small {
      flex-direction: column;
    }
  }

  .total-price {
    display: flex;
    justify-content: center;
    align-items: center;
    @include small {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 10px;
    }
    .txt {
      margin-right: 20px;
    }
    .sum {
      font-size: 30px;
      color: $primaryColor;
      font-weight: 600;
    }
  }

  .select-shops {
    display: flex;
    justify-content: center;
    align-items: center;
    @include small {
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
    }
    .txt {
      margin-right: 20px;
      @include small {
        margin-right: 0;
        justify-content: flex-start;
        width: 100%;
      }
    }
    .img-group {
      @include small {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 15px;
      }
      img {
        width: 50px;
        height: auto;
        margin-right: 20px;
        @include small {
          width: 18%;
          margin-right: auto;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .btn-all {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin: 30px auto;
    .btn {
      padding: 12px;
      background-color: #62a1d2;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border-radius: 25px;
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
}
</style>

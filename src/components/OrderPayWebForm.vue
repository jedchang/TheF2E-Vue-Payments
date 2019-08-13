<template>
  <div class="order-pay-web-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
          <div class="section">
            <div class="info-txt">
              <div class="total-price">
                <div class="txt">應付金額</div>
                <!-- <div class="sum">$2,000</div> -->
                <div class="sum">$ {{totalAll}}</div>
              </div>
              <div class="select-banks">
                <div class="txt">選擇銀行</div>
                <el-select
                  v-model="value"
                  placeholder="請選擇銀行"
                >
                  <el-option
                    v-for="item in banks"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
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
  name: 'OrderPayWebForm',
  components: {
    Notice
  },
  data() {
    return {
      banks: [
        {
          value: 'cathaybk',
          label: '國泰世華銀行'
        },
        {
          value: 'esun',
          label: '玉山銀行'
        },
        {
          value: 'huanan',
          label: '華南銀行'
        },
        {
          value: 'bot',
          label: '臺灣銀行'
        },
        {
          value: 'land',
          label: '土地銀行'
        }
      ],
      value: ''
    };
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

.order-pay-web-form {
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

  .select-banks {
    display: flex;
    justify-content: center;
    align-items: center;
    @include small {
      width: 100%;
      justify-content: flex-start;
    }
    .txt {
      margin-right: 20px;
    }
    .el-select {
      font-size: 30px;
      color: $primaryColor;
      font-weight: 600;
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

  // .section-input {
  //   padding: 25px;
  //   background-color: #fff;
  //   border-radius: 10px;
  //   margin-bottom: 10px;

  //   .form-group {
  //     align-items: baseline;
  //     height: 60px;
  //     @include small {
  //       height: auto;
  //     }
  //   }

  //   label {
  //     font-size: 14px;
  //     color: #505050;
  //     font-weight: 400;
  //   }
  //   input {
  //     width: 100%;
  //     font-size: 14px;
  //     color: #505050;
  //     padding: 12px;
  //     border-radius: 4px;
  //     border: 1px solid #b3aba6;
  //     &:focus {
  //       outline: none;
  //     }
  //   }

  //   .my-group {
  //     display: flex;
  //     justify-content: flex-start;
  //     align-items: center;
  //   }
  //   .note-txt {
  //     margin-top: 30px;
  //     color: #b3aba6;
  //     font-weight: 500;
  //     font-size: 14px;
  //     p {
  //       margin-bottom: 5px;
  //     }
  //     ul {
  //       padding-left: 30px;
  //       margin-bottom: 0;
  //     }
  //   }
  // }
}
</style>

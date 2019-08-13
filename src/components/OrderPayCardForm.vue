<template>
  <div class="order-pay-card-form">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="section-info">
            <div class="total-price">
              <div class="txt">應付金額</div>
              <!-- vuex getters 中的 totalAll -->
              <div class="sum">$ {{totalAll}}</div>

            </div>
            <div class="cards-type">
              <div class="txt">支援信用卡種類</div>
              <div class="img-group">
                <img
                  src="../assets/icon_VISA.svg"
                  alt=""
                >
                <img
                  src="../assets/icon_Master.svg"
                  alt=""
                >
                <img
                  src="../assets/icon_JCB.svg"
                  alt=""
                >
              </div>
            </div>
          </div>
          <div class="section-input">
            <form
              method="post"
              @submit.prevent="submitProcess"
            >
              <div class="form-group row">
                <label
                  for="creditCard"
                  class="col-md-3 col-form-label"
                >信用卡卡號</label>
                <div class="col-lg-5 col-md-6">
                  <input
                    v-validate="'required|digits:16'"
                    v-model="user.creditCard"
                    type="text"
                    name="creditCard"
                    class="cardNum-input"
                    maxlength="16"
                  >
                </div>
                <div class="col-lg-3 col-md-3">
                  <span
                    class="error-txt"
                    v-show="errors.has('creditCard')"
                  >
                    <img
                      class="check-icon"
                      src="../assets/icon_notice.svg"
                    >
                    {{ errors.first('creditCard') }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="cardName"
                  class="col-md-3 col-form-label"
                >持卡人英文姓名</label>
                <div class="col-lg-5 col-md-6">
                  <input
                    v-validate="'required'"
                    v-model="user.cardName"
                    name="cardName"
                    type="text"
                    class="cardNum-input"
                  >
                </div>
                <div class="col-lg-3 col-md-3">
                  <span
                    class="error-txt"
                    v-show="errors.has('cardName')"
                  >
                    <img
                      class="check-icon"
                      src="../assets/icon_notice.svg"
                    >
                    {{ errors.first('cardName') }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="cardDate"
                  class="col-md-3 col-form-label"
                >有效年月</label>
                <div class="col-lg-2 col-md-3 col-sm-5 col-4">

                  <el-select
                    v-model="value1"
                    clearable
                    placeholder="月"
                  >
                    <el-option
                      v-for="item in months"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>

                </div>
                <div class="col-lg-2 col-md-3 col-sm-5 col-4">
                  <el-select
                    v-model="value2"
                    clearable
                    placeholder="年"
                  >
                    <el-option
                      v-for="item in years"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="col-lg-1 col-1">
                  <el-tooltip placement="right">
                    <div slot="content"><img
                        class="show-info"
                        src="../assets/Web_order_hit01@2x.png"
                        alt=""
                      ></div>
                    <el-button>
                      <font-awesome-icon :icon="['fas','question']" />
                    </el-button>
                  </el-tooltip>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="safeNum"
                  class="col-md-3 col-form-label"
                >安全驗證碼</label>
                <div class="col-lg-3 col-md-6 col-10">
                  <input
                    v-validate="'required|digits:3'"
                    v-model="user.safeNum"
                    name="safeNum"
                    type="password"
                    class="safeNum-input"
                    maxlength="3"
                  >
                </div>
                <div class="col-lg-1 col-1">
                  <el-tooltip placement="right">
                    <div slot="content"><img
                        class="show-info"
                        src="../assets/Web_order_hit02@2x.png"
                        alt=""
                      ></div>
                    <el-button>
                      <font-awesome-icon :icon="['fas','question']" />
                    </el-button>
                  </el-tooltip>
                </div>
                <div class="col-lg-3 col-md-3">
                  <span
                    class="error-txt"
                    v-show="errors.has('safeNum')"
                  >
                    <img
                      class="check-icon"
                      src="../assets/icon_notice.svg"
                    >
                    {{ errors.first('safeNum') }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="phone"
                  class="col-md-3 col-form-label"
                >手機號碼</label>
                <div class="col-lg-5 col-md-6">
                  <input
                    v-validate="'required|digits:10'"
                    v-model="user.phone"
                    name="phone"
                    type="text"
                    class="phone-input"
                    maxlength="10"
                  >
                </div>
                <div class="col-lg-3 col-md-3">
                  <span
                    class="error-txt"
                    v-show="errors.has('phone')"
                  >
                    <img
                      class="check-icon"
                      src="../assets/icon_notice.svg"
                    >
                    {{ errors.first('phone') }}
                  </span>
                </div>
              </div>

              <div class="note-group row">
                <div class="col-md-12">
                  <Notice />
                </div>
              </div>
              <div class="btn-all col-lg-6 col-md-8 offset-3">
                <router-link
                  to="/"
                  class="btn col-md-5 col-sm-4 col-5"
                >
                  <button type="button">返回訂單</button>
                </router-link>
                <!-- 
                <button
                  class="btn btn-sumbit col-md-5 col-sm-4 col-5"
                  type="button"
                  @click.prevent="submitProcess()"
                >送出
                  <router-link to="/complete">
                  </router-link>
                </button> -->

                <!-- <router-link
                  to="/complete"
                  class="btn btn-sumbit col-md-5 col-sm-4 col-5"
                  @submit.prevent="submitProcess"
                >
                  <button type="button">送出</button>
                </router-link> -->

                <button
                  class="btn btn-sumbit col-md-5 col-sm-4 col-5"
                  type="submit"
                >送出</button>
              </div>
            </form>
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
  name: 'orderPayCardForm',
  components: {
    Notice
  },
  data() {
    return {
      user: {
        creditCard: '',
        cardName: '',
        safeNum: '',
        phone: ''
      },
      months: [
        {
          value: '1',
          label: '01'
        },
        {
          value: '2',
          label: '02'
        },
        {
          value: '3',
          label: '03'
        },
        {
          value: '4',
          label: '04'
        },
        {
          value: '5',
          label: '05'
        },
        {
          value: '6',
          label: '06'
        },
        {
          value: '7',
          label: '07'
        },
        {
          value: '8',
          label: '08'
        },
        {
          value: '9',
          label: '09'
        },
        {
          value: '10',
          label: '10'
        },
        {
          value: '11',
          label: '11'
        },
        {
          value: '12',
          label: '12'
        }
      ],
      years: [
        {
          value: '2019',
          label: '19'
        },
        {
          value: '2020',
          label: '20'
        },
        {
          value: '2021',
          label: '21'
        },
        {
          value: '2022',
          label: '22'
        },
        {
          value: '2023',
          label: '23'
        },
        {
          value: '2024',
          label: '24'
        },
        {
          value: '2025',
          label: '25'
        },
        {
          value: '2026',
          label: '26'
        },
        {
          value: '2027',
          label: '27'
        },
        {
          value: '2028',
          label: '28'
        },
        {
          value: '2029',
          label: '29'
        },
        {
          value: '2030',
          label: '30'
        }
      ],
      value1: [],
      value2: []
    };
  },
  methods: {
    submitProcess() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // alert('表格已提交!');
          this.$router.push('/complete');
          return;
        }
        alert('表格填寫錯誤!');
        console.log('表格填寫錯誤!');
      });
    }
  },
  computed: {
    // totalSum1() {
    //   return this.$store.getters.totalSum1;
    // },
    // totalSum2() {
    //   return this.$store.getters.totalSum2;
    // },
    // totalAll() {
    //   return this.$store.getters.totalAll;
    // }

    // 解構 vuex getters
    ...mapGetters(['totalSum1', 'totalSum2', 'totalAll']),
    ...mapState(['sum1', 'sum2', 'num1', 'num2'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_paymentBtn.scss';

.order-pay-card-form {
  width: 100%;
  background-color: rgba(179, 171, 166, 0.2);
  padding: 30px 0;

  .section-info {
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #505050;
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
  .cards-type {
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
  }

  .section-input {
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;

    .form-group {
      align-items: baseline;
      height: 60px;
      @include small {
        height: auto;
      }
    }

    label {
      font-size: 14px;
      color: #505050;
      font-weight: 400;
    }
    input {
      width: 100%;
      font-size: 14px;
      color: #505050;
      padding: 12px;
      border-radius: 4px;
      border: 1px solid #b3aba6;
      &:focus {
        outline: none;
      }
    }

    .my-group {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .note-txt {
      margin-top: 30px;
      color: #b3aba6;
      font-weight: 500;
      font-size: 14px;
      p {
        margin-bottom: 5px;
      }
      ul {
        padding-left: 30px;
        margin-bottom: 0;
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
    .right {
      float: right;
      width: 60px;
    }
    .error-txt {
      color: #eb4242;
      font-size: 14px;
      font-weight: 500;
      img.check-icon {
        height: 18px;
        width: 18px;
      }
    }
  }
  .btn.focus,
  .btn:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);
  }
}
</style>

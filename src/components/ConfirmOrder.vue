<template>
  <div class="confirm-order">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3 class="sub-title">確認訂單金額</h3>
          <div class="order-info">
            <div class="order-num">訂單編號 201907310111</div>
            <div class="order-item">
              <div class="pic">
                <img
                  src="../assets/ipadpro-9_TP_V4@2x.png"
                  alt=""
                >
              </div>
              <div class="info">
                <div class="txt">
                  <div class="name">iPapa Pro</div>
                  <div class="desc">全新iPapa Pro 的強大威力不但更勝多數電腦，且更易攜帶、功能更多樣，也更容易使用。</div>
                </div>
                <div class="control">
                  <el-input-number
                    v-model="$store.state.num1"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                  <!-- vuex getters 中的 totalSum1 -->
                  <div class="sum">$ {{totalSum1}} </div>
                  <a
                    href="javascript:;"
                    class="btn-delete"
                  >
                    <font-awesome-icon :icon="['far','trash-alt']" /></a>
                </div>
              </div>
            </div>
            <div class="order-item">
              <div class="pic">
                <img
                  src="../assets/headphoneIMGL4494_TP_V4@2x.png"
                  alt=""
                >
              </div>
              <div class="info">
                <div class="txt">
                  <div class="name">Bets S3</div>
                  <div class="desc">純粹智慧調控式噪音消除技術，可主動阻絕外部噪音。即時音訊校準能力保留最佳聆聽體驗。</div>
                </div>
                <div class="control">
                  <el-input-number
                    v-model="$store.state.num2"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                  <!-- vuex getters 中的 totalSum2 -->
                  <div class="sum">$ {{totalSum2}}</div>
                  <a
                    href="javascript:;"
                    class="btn-delete"
                  >
                    <font-awesome-icon :icon="['far','trash-alt']" /></a>
                </div>
              </div>
            </div>
            <div class="total-info">
              <div class="total-txt">Total</div>
              <!-- vuex getters 中的 totalAll -->
              <div class="total-sum">$ {{totalAll}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 使用 getters
import { mapGetters } from 'vuex';

export default {
  name: 'ConfirmOrder',
  data() {
    return {};
  },
  methods: {
    handleChange(value) {
      // actions 通過 store.dispatch 方法觸發
      this.$store.dispatch(
        'updateSum1',
        this.$store.state.num1 * this.$store.state.sum1
      );
      console.log(value);
    }
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

.confirm-order {
  width: 100%;
  margin: 40px 0;
  .sub-title {
    font-size: 22px;
    color: $primaryColor;
    font-weight: 600;
    margin-bottom: 10px;
    @include medium {
      text-align: center;
    }
    @include small {
      font-size: 14px;
    }
  }
}
.order-info {
  border: 2px solid $primaryColor;
  border-radius: 10px;
  padding: 20px 40px;
  position: relative;
  @include medium {
    padding: 20px 20px;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 15px 15px 0 15px;
    border-color: $primaryColor transparent transparent transparent;
  }

  .order-num {
    font-size: 18px;
    font-weight: 600;
    color: #505050;
    margin-bottom: 23px;
    border-bottom: 1px solid $primaryColor;
    padding-bottom: 10px;
    @include small {
      font-size: 14px;
    }
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    border-bottom: 1px solid #cfcdcb;
  }

  .pic {
    width: 20%;
    @include medium {
      width: auto;
      margin-right: 10px;
    }
    img {
      width: 150px;
      height: 100px;
      @include medium {
        width: 100px;
        height: auto;
      }
      @include small {
        width: 60px;
        height: auto;
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    @include medium {
      width: auto;
      flex-direction: column;
    }
    .txt {
      width: 50%;
      @include large {
        width: 40%;
      }
      @include medium {
        width: 100%;
        margin-bottom: 10px;
      }
      .name {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
        @include small {
          font-size: 14px;
        }
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
        @include small {
          font-size: 12px;
        }
      }
    }

    .control {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      @include large {
        width: 60%;
      }
      @include medium {
        width: 100%;
        justify-content: space-between;
      }
      .el-input-number {
        margin-right: 30px;
        @include small {
          margin-right: 15px;
        }
      }
      .sum {
        font-size: 18px;
        font-weight: 600;
        margin-right: 30px;
        @include small {
          font-size: 14px;
        }
      }
      .btn-delete {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: #fff;
        background-color: #b3aba6;
        border-radius: 50%;
        transition: all 0.4s;
        &:hover {
          background-color: $primaryColor;
        }
      }
    }
  }

  .total-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 27px 0;
    @include small {
      margin: 14px 0;
    }
    .total-txt {
      font-size: 18px;
      font-weight: 600;
      color: $primaryColor;
      margin-right: 85px;
      @include small {
        font-size: 14px;
        margin-right: 25px;
      }
    }
    .total-sum {
      font-size: 24px;
      font-weight: 600;
      color: $primaryColor;
      @include small {
        font-size: 16px;
      }
    }
  }
}
</style>

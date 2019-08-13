<template>
  <div class="order-info">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h1 class="title">訂單資訊</h1>
          <ul class="steps">
            <li class="step step-1"></li>
            <li class="txt txt-1"><span>STEP1</span>選定支付方式</li>
            <li class="step step-2"></li>
            <li class="txt txt-2"><span>STEP2</span>輸入信用卡資訊或取得支付代碼</li>
            <li class="step step-3"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepInfoBar',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';

.order-info {
  width: 100%;
  padding: 60px 0 40px 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  font-size: 30px;
  color: #173060;
  font-weight: 600;
  text-align: center;
}

.steps {
  list-style: none;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-between;
  color: #b3aba6;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 8px;
    height: 4px;
    width: 50%;
    background-color: #b3aba6;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0px;
    top: 8px;
    height: 4px;
    width: 50%;
    background-color: #b3aba6;
  }
  .txt {
    width: 30%;
    font-size: 14px;
    font-weight: 400;
    color: #b3aba6;
    margin-top: 20px;
    text-align: center;
    display: block;
    @include extra {
      width: auto;
    }
    span {
      font-weight: 400;
      font-family: 'Noto Sans TC', sans-serif;
      margin-right: 5px;
    }
  }
  .txt-1 {
    @include extra {
      display: none;
    }
  }
  .txt-2 {
    @include extra {
      display: none;
    }
  }
  .step.current {
    background-color: $primaryColor;
  }
}
.steps.current {
  &:before {
    background-color: $primaryColor;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0px;
    top: 8px;
    height: 4px;
    width: 50%;
    background-color: #b3aba6;
  }
}

.complete {
  .steps.current {
    &:after {
      background-color: $primaryColor;
    }
  }
}

.step {
  position: relative;
  text-align: center;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  background-color: #b3aba6;
  z-index: 2;
}
</style>

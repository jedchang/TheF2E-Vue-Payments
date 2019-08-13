<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';
@import '@/assets/scss/_transition.scss';

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: #fff;
  text-decoration: none;
  outline: none !important;
  box-shadow: none !important;
  transition: all 0.4s;
}
a:hover {
  text-decoration: none;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: $primaryFont;
  font-weight: 400;
}

// custom elemeny-ui
.el-input__inner:focus {
  border: 1px solid #dcdfe6;
}
.el-input-number__decrease:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled),
.el-input-number__increase:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled) {
  border-color: #dcdfe6;
}

#app {
  width: 100%;
  height: 100%;
  font-family: $primaryFont;
  color: #505050;
  font-weight: 300;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';

import VeeValidate, { Validator } from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW';

Vue.use(Vuex);

Vue.use(VeeValidate);

// 關閉正式環境下的提示功能
Vue.config.productionTip = false;

Validator.localize('zh_TW', zh_TW);

const dictionary = {
  zh_TW: {
    messages: {
      required: field => `請輸入 ${field}`,
      creditCard: '請輸入卡片正面 16 位卡號',
      cardName: '請輸入姓名',
      cardName: '請輸入安全驗證碼',
      phone: '請輸入手機號碼'
    },
    attributes: {
      creditCard: '卡號',
      cardName: '姓名',
      safeNum: '安全驗證碼',
      phone: '手機號碼'
    }
  }
};
Validator.localize(dictionary);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 修改 element ui
import '@/assets/scss/_element-ui.scss';

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

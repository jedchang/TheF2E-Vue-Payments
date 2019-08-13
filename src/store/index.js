import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sum1: 1000,
    sum2: 1000,
    num1: 1,
    num2: 1
  },
  // 操作行為
  actions: {
    updateSum1(context, payload) {
      context.commit('UPDATESUM1', payload);
    }
  },
  // 實際操作狀態，更改 state 資料，建議大寫
  mutations: {
    UPDATESUM1(state, payload) {
      state.sun1 = payload;
    }
  },
  getters: {
    totalSum1(state) {
      return state.num1 * state.sum1;
    },
    totalSum2(state) {
      return state.num2 * state.sum2;
    },
    totalAll(state) {
      return state.num1 * state.sum1 + state.num2 * state.sum2;
    }
  }
});

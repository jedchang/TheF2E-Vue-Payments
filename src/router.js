import Vue from 'vue';
import Router from 'vue-router';

// 自訂 router 分頁
import Home from './views/Home.vue';
import OrderPayCard from './views/OrderPayCard.vue';
import OrderPayWeb from './views/OrderPayWeb.vue';
import OrderPayShop from './views/OrderPayShop.vue';
import Complete from './views/Complete.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order-payByCard',
      name: 'orderPayCard',
      component: OrderPayCard
    },
    {
      path: '/order-payByWebATM',
      name: 'orderPayWeb',
      component: OrderPayWeb
    },
    {
      path: '/order-payByShop',
      name: 'orderPayShop',
      component: OrderPayShop
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    },
    {
      path: '*',
      redirect: '/' // 路由錯誤自動導向到跟目錄
    }
  ]
});

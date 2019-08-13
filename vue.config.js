// vue.config.js
module.exports = {
  // 如果環境是生產模式，就使用 gitHub pages 路徑，不然就用根目錄
  publicPath: process.env.NODE_ENV === 'production' ? '/TheF2E-Vue-Payments/dist' : '/'
};

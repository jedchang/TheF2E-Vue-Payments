// vue.config.js
// module.exports = {
//   //  之前為 baseUrl 從 Vue CLI 3.3 開始棄用
//   // 部屬到 github pages 路徑為 https://nusr.github.io/TheF2E-Vue-Payments/
//   publicPath: process.env.NODE_ENV === 'production' ? '/TheF2E-Vue-Payments/' : '/'
// };

// module.exports = {
//   publicPath: '/'
// };

module.exports = {
  // 如果是生產模式 (放到 GitHub 上路徑)，不然就用跟目錄
  publicPath: process.env.NODE_ENV === 'production' ? '/TheF2E-Vue-Payments/' : '/'
};

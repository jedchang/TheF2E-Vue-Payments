<template>
  <div class="note-txt">
    <p>注意事項</p>
    <ul>
      <li>請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
      <li>使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
      <li>每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
      <li>若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
      <li>若您對取貨或付款的方式有疑問，請詳閱「購買說明」。</li>
      <li>請確認您已詳閱並瞭解本站「購買說明」內容，訂單完成即表示您已同意其中的各項說明。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NoteTxt'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_variable.scss';
@import '@/assets/scss/_mixin.scss';

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
</style>

<style lang="scss" type="text/scss" scoped>
  .page-footer {
    // position: fixed;
    // bottom: 0;
    width: 100%;
    padding: 30px 0 30px;
    color: #6190E8;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.8);
    .footer-container{
      width: 90%;
      margin: 0 auto;
    }
    .text-left {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #5e6d82;
      img{
        border-radius: 100%;
        margin-right: 10px;
      }
      a {
        color: #6190E8;
      }
    }
  }
</style>

<template>
  <div class="page-footer">
    <div class="footer-container">
      This site is maintained by:
      <address>
         <a href="mailto:njcit_wangqi@163.com">bhaltair</a>
      </address>
    </div>
  </div>
</template>

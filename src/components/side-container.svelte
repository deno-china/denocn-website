<style lang="less">
  .side-contanier {
    width: 290px;
    min-width: 200px;
    margin-left: 20px;
  }
  @media (max-width: 1000px) {
    .side-contanier {
      margin-left: 0px;
      width: 100%;
    }
  }
</style>

<div class="side-contanier">
  <slot />
</div>

<script>
  import Header from "../header.svelte";
  import Footer from "../footer.svelte";
</script>

<style lang="less">
  .layout-default {
    width: 100%;
    padding-bottom: 88px;
    #main-wrapper {
      margin: auto;
      flex: 1;
      display: flex;
      padding: 30px 0;
      max-width: 1400px;
      flex-direction: row;
      width: 90%;
      > .content {
        flex: 1;
      }
    }

    @media (max-width: 1000px) {
      #main-wrapper {
        width: 100%;
        flex-direction: column;
      }
    }
  }
</style>

<div class="layout-default">
  <Header />
  <div id="main-wrapper">
    <div class="content">
      <slot />
    </div>
    <slot name="side" />
  </div>
  <Footer />
</div>

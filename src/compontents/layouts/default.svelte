<script>
  import Header from "../header/index.svelte";
</script>

<div className="layout-default">
  <Header />
  <div id="main-wrapper">
    <div className="content">
      <slot />
    </div>
    <div className="side">{''}</div>
  </div>
  <!-- <Footer /> -->
</div>

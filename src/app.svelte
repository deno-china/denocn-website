<script>
  import { Router, Link, Route } from "svelte-routing";
  import About from "./pages/about/index.svelte";
  import Index from "./pages/index/index.svelte";
  export let url = "";
</script>

<Router {url}>
  <Route path="about" component={About} />
  <Route path="/" component={Index} />
</Router>

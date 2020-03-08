<script>
  import { Router, Link, Route } from "svelte-routing";
  import About from "./pages/about/index.svelte";
  import Index from "./pages/index/index.svelte";
  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="about" component={About} />
    <Route path="/" component={Index} />
    <div>{url}</div>
  </div>
</Router>

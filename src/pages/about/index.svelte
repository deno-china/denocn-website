<script>
  import DefaultLayout from "../../components/layouts/default.svelte";
  import AboutContent from "./about.md";
  import Markdown from "../../components/markdown.svelte";
</script>

<DefaultLayout>
  <Markdown>
    <AboutContent />
  </Markdown>
</DefaultLayout>

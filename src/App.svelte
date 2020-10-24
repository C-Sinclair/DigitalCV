<script>
  import { Router, Route } from "svelte-routing";
  import Layout from "./components/Layout.svelte";
  import { routes } from "./routes";

  export let url;
</script>

<Router {url}>
  <Layout>
    {#each routes as { path, component }}
      <Route {path} {component} />
    {/each}
  </Layout>
</Router>

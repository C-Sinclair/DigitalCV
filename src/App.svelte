<script>
  import { Router, Route } from "svelte-routing";
  import Layout from "./components/Layout.svelte";
  import Home from "./routes/Home.svelte";
  import Contact from "./routes/Contact.svelte";
  import NotFound from "./routes/404.svelte";

  export let url;

  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "contact",
      component: Contact,
    },
    {
      component: NotFound,
    },
  ];
</script>

<Router {url}>
  <Layout>
    {#each routes as { path, component }}
      <Route {path} {component} />
    {/each}
  </Layout>
</Router>

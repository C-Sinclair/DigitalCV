<script>
  export let title;
</script>

<article>
  <h1>{title}</h1>
  <slot />
</article>

<style>
  article {
    padding: 10px 20px;
  }
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0;
  }
</style>

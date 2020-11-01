<script lang="ts">
  import { fade } from "svelte/transition";
  import { currentSection } from "../../util/scroll";
  import Screenshots from "./Screenshots.svelte";
</script>

<style>
  section {
    width: 100vw;
    position: fixed;
    top: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0;
  }
</style>

{#if $currentSection === 'Projects'}
  <section>
    <h1 in:fade out:fade>Projects</h1>
    <Screenshots />
  </section>
{/if}

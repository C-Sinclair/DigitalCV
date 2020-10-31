<script lang="ts">
  import { fade } from "svelte/transition";
  import { currentSection } from "../../util/scroll";
  import Screenshots from "./Screenshots.svelte";
</script>

<style>
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0;
    position: fixed;
    top: 80px;
    padding: 10px 40px;
  }
</style>

{#if $currentSection === 'Projects'}
  <h1 in:fade out:fade>Projects</h1>
  <Screenshots />
{/if}

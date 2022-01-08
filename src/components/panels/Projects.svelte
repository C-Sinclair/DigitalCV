<script>
  import { fade } from "svelte/transition";
  import Screenshots from "./Screenshots.svelte";
  import Section from "./Section.svelte";

  const name = "Projects";
</script>

<Section {name}>
  <h1 in:fade out:fade>Projects</h1>
  <Screenshots />
</Section>

<style>
</style>

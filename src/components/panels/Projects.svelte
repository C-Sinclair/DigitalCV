<script>
  import { fade } from "svelte/transition";
  import Section from "./Section.svelte";

  const name = "Projects";
</script>

<Section {name}>
  <h1 in:fade out:fade>Projects</h1>
</Section>

<style>
</style>

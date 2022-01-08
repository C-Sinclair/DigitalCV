<script>
  import { fade } from "svelte/transition";
  import Section from "./Section.svelte";

  const name = "Projects";
</script>

<Section {name}>
  <h1 in:fade out:fade>Projects</h1>
  <article>
    <h2>Follow Lamplight</h2>
    <h4>Nursing Recruitment Platform</h4>
    <p>
      I took this application from conception to market in a staggering 72 days.
    </p>
  </article>
  <article>
    <h2>TalentTicker</h2>
    <h4>Recruitment Artificial Intelligence</h4>
    <p />
  </article>
  <article>
    <h2>Mediaseal</h2>
    <h4>Media Encryption</h4>
    <p />
  </article>
</Section>

<style>
</style>

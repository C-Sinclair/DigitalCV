<script>
  import { fade } from "svelte/transition";
  import Section from "./Section.svelte";

  const name = "End";
</script>

<Section {name}>
  <h1 in:fade out:fade>Like what you see?</h1>
  <p>Why not get in contact?</p>
  <p>
    I'm always open to collaborate, discuss and educate other human animals in
    their own adventures in technology.
  </p>
  <a href="mailto: conor@sinclair.software">Ping me an email</a>
</Section>

<style>
</style>

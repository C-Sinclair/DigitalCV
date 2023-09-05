<script>
  import { fade } from "svelte/transition";
  import Buzzwords from "../components/panels/Buzzwords.svelte";
  import Languages from "../components/panels/Languages.svelte";
  import Projects from "../components/panels/projects/Projects.svelte";
  import TitlePanel from "../components/panels/Title.svelte";
  import { secondsPassed } from "../util/timer";

  let scrollY = 0;

  const twoSecsPassed = secondsPassed(2.5);
</script>

<svelte:head>
  <title>C Sinclair Curriclum Vitae</title>
</svelte:head>

<svelte:window bind:scrollY />

<TitlePanel {scrollY} />
<section />

{#if scrollY > 10 || $twoSecsPassed !== false}
  <div id="buzzwords">
    <Buzzwords {scrollY} />
  </div>
{/if}

<Languages />

<Projects />

<section class="content">
  <h1 in:fade out:fade>Like what you see?</h1>
  <p>Why not get in contact?</p>
  <p>
    I'm always open to collaborate, discuss and educate other human animals in
    their own adventures in technology.
  </p>
  <a href="mailto: conor@sinclair.software">Ping me an email</a>
</section>

<style>
  section:not(.content) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  #buzzwords {
    display: flex;
    width: 100vw;
    justify-content: center;
    position: fixed;
    top: calc(50vh + 40px);
    z-index: 100;
  }
</style>

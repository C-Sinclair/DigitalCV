<script>
  import Buzzwords from "../components/panels/Buzzwords.svelte";
  import TitlePanel from "../components/panels/Title.svelte";
  import TabSection from "../components/TabSection.svelte";

  import { secondsPassed } from "../util/timer";

  let scrollY = 0;
  let hasScrolled = false;

  const twoSecsPassed = secondsPassed(2.5);
</script>

<svelte:head>
  <title>C Sinclair Curriclum Vitae</title>
</svelte:head>

<svelte:window
  on:mousewheel={(e) => {
    scrollY += e.deltaY;
    hasScrolled = scrollY > 0;
  }}
/>

<TitlePanel {hasScrolled} />

{#if hasScrolled || $twoSecsPassed !== false}
  <div id="buzzwords">
    <Buzzwords {scrollY} {hasScrolled} />
  </div>
{/if}

<TabSection {hasScrolled} />

<style>
  #buzzwords {
    display: flex;
    width: 100vw;
    justify-content: center;
    position: fixed;
    top: calc(50vh + 40px);
    z-index: 100;
  }
</style>

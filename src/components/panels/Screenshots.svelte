<script>
  import { interval } from "rxjs";
  import { onMount } from "svelte";
  import { shots } from "../../contexts/firebase/screenshots";

  let index = 0;
  let items = [];

  $: interval(2400).subscribe(() => {
    if (index === shots.length) {
      index = 0;
    } else {
      index++;
    }
  });

  onMount(() => {
    shots.subscribe((s) => {
      items = s;
    });
  });
</script>

<style>
  img {
    max-width: 400px;
    max-height: 400px;
  }
</style>

{#if items.length == 0}
  <p>Fetching screenshots...</p>
{:else}
  <div>
    {#each items as shot, i}
      {#if index === i}
        <picture title={shot.name}>
          <img src={shot.url} alt="A screenshot of some incredible dev work" />
        </picture>
      {/if}
    {/each}
  </div>
{/if}

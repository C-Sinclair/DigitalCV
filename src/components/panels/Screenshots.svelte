<script>
  import { interval } from "rxjs";
  import { filter, map } from "rxjs/operators";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { quadOut } from "svelte/easing";
  import { shots, fetchShots } from "../../contexts/firebase/screenshots";

  let index = 0;

  onMount(async () => {
    await fetchShots();
    const sub$ = interval(4000)
      .pipe(
        map(() => get(shots).length),
        filter((length) => length > 0)
      )
      .subscribe((length) => {
        if (index === length - 1) {
          index = 0;
        } else {
          index++;
        }
      });
    return sub$.unsubscribe;
  });

  const slideIn = () => ({
    duration: 250,
    delay: 510,
    css: (t) => `
      transform: translateX(${10 / (t + 0.1)}vw);
    `,
  });
  const slideOut = () => ({
    duration: 250,
    css: (t) => `
      transform: translateX(-${10 / quadOut(t)}vw);
    `,
  });
</script>

<style>
  div {
    display: flex;
    width: 100vw;
    height: 80vh;
    justify-content: center;
    padding-top: 40px;
    position: relative;
    overflow: hidden;
  }
  picture {
    position: absolute;
    transition: all 2s;
  }
  picture,
  img {
    max-width: 400px;
    max-height: 500px;
  }
</style>

{#if $shots.length == 0}
  <p>Fetching screenshots...</p>
{:else}
  <div>
    {#each $shots as shot, i}
      {#if index === i}
        <picture title={shot.name} in:slideIn out:slideOut>
          <img src={shot.url} alt="A screenshot of some incredible dev work" />
        </picture>
      {/if}
    {/each}
  </div>
{/if}

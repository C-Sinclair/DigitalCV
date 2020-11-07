<script>
  import { interval } from "rxjs";
  import { filter, map } from "rxjs/operators";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
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
</script>

<style>
  article {
    width: 100vw;
    height: 80vh;
  }
  div {
    display: flex;
    width: fit-content;
    height: 100%;
    justify-content: center;
    padding-top: 40px;
    position: relative;
    overflow: hidden;
    margin-left: -20px;
    transition: all 1s;
    animation: carousel 30s infinite linear;
  }
  picture {
    transition: all 2s;
    margin: 20px;
  }
  picture,
  img {
    max-height: 50vh;
  }
  @keyframes carousel {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>

{#if $shots.length == 0}
  <p>Fetching screenshots...</p>
{:else}
  <article>
    <div>
      {#each $shots as shot}
        <picture title={shot.name}>
          <img src={shot.url} alt="A screenshot of some incredible dev work" />
        </picture>
      {/each}
    </div>
  </article>
{/if}

<script>
  import { interval } from "rxjs";
  import { map, startWith, tap } from "rxjs/operators";
  import { fade, fly, scale } from "svelte/transition";

  let unique = {};

  const buzzwords = [
    "Javascript",
    "Suave",
    "Business Minded",
    "Redux",
    "Cutting Edge",
    "Svelte",
    "Node",
    "Moustache Wielding",
    "Event Driven",
    "Passionate",
    "Typescript",
    "Full Stack",
    "Frontend",
    "Backend",
    "Data Manipulating",
    "Team Leading",
    "Functional",
    "Vegetarian",
    "Spirited",
    "Collaborative",
    "Thoughtful",
  ];
  const buzzword = interval(2500).pipe(
    map((i) => buzzwords[i % buzzwords.length]),
    startWith(buzzwords[buzzwords.length - 1]),
    tap(() => {
      unique = {};
    })
  );

  export let scrollY = 0;
</script>

{#if scrollY < 200}
  <article in:fade={{ delay: 400 }} out:fade>
    <p class:scrolled={scrollY >= 100}>A</p>
    {#if scrollY < 100}
      <span out:scale={{ x: 0 }}>
        {#key unique}
          <h6
            in:fly={{ y: -100, delay: 500, duration: 200 }}
            out:fly={{ y: 100, duration: 400 }}
          >
            {$buzzword}
          </h6>
        {/key}
      </span>
    {/if}
    <p class:scrolled={scrollY >= 100}>Developer</p>
  </article>
{/if}

{#if scrollY > 250}
  <span in:fade={{ delay: 400 }} out:scale={{ x: 0 }} class="navBar">
    {#key unique}
      <h6
        in:fly={{ y: -10, delay: 500, duration: 200 }}
        out:fly={{ y: 10, duration: 400 }}
      >
        {$buzzword}
      </h6>
    {/key}
  </span>
{/if}

<style>
  article {
    position: relative;
    width: 250px;
    transition: all 0.4s ease;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    position: absolute;
    font-family: "Dancing Script", sans-serif;
    transition: all 0.4s ease;
  }
  p:first-child {
    left: 25px;
    top: -40px;
    font-size: 1.5em;
  }
  p.scrolled:first-child {
    top: -17px;
    left: 55px;
  }
  p:last-child {
    top: -0px;
    right: -40px;
    font-size: 2em;
  }
  p.scrolled:last-child {
    top: -30px;
    right: 50px;
  }
  span {
    background: var(--theme-secondary);
    box-shadow: 1px 1px 3px 1px var(--theme-primary);
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    text-align: center;
    font-family: "Oswald", sans-serif;
    overflow: hidden;
    height: 25px;
    transition: all 0.3s ease;
  }
  h6 {
    font-weight: 400;
    font-size: 1em;
    padding: 0;
    margin: 0;
  }
  span.navBar {
    position: fixed;
    top: 15px;
    right: 70px;
    width: 150px;
    padding: 5px;
    cursor: pointer;
  }
  span.navBar:hover {
    transform: scale(1.05);
    border: 1px solid var(--theme-trim);
  }
  span.navBar h6 {
    font-size: 12px;
    margin-top: 3px;
  }
</style>

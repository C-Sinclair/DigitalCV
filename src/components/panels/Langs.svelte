<script>
  import { scale, fade } from "svelte/transition";
  import { currentSection } from "../../util/scroll";
  import Elixir from "../svg/Elixir.svelte";
  import Js from "../svg/JS.svelte";
  import Kotlin from "../svg/Kotlin.svelte";
  import React from "../svg/React.svelte";
  import Swift from "../svg/Swift.svelte";
  import Ts from "../svg/TS.svelte";

  const scaleIn = (n) => ({ start: 4, delay: n * 400 });
  const scaleOut = (n) => ({ end: 0, delay: n * 400 });

  const langs = [Js, Ts, React, Elixir, Kotlin, Swift];
</script>

<style>
  section {
    width: 100vw;
    position: fixed;
    top: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }
  article {
    width: 100vw;
    padding: 10px 20px;
    display: flex;
    justify-content: space-evenly;
  }
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0;
  }
  .logo {
    left: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
  }
</style>

{#if $currentSection === 'Programming'}
  <section>
    <h1 in:fade out:fade>Programming Fluency</h1>
    <article>
      {#each langs as Lang, i}
        <div in:scale={scaleIn(i)} out:scale={scaleOut(i)} class="logo">
          <Lang />
        </div>
      {/each}
    </article>
  </section>
{/if}

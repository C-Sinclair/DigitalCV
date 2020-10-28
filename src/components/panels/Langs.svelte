<script lang="ts">
  import { scale, fade } from "svelte/transition";
  import { currentSection } from "../../util/scroll";
  import Js from "../svg/JS.svelte";
  import Kotlin from "../svg/Kotlin.svelte";
  import React from "../svg/React.svelte";
  import Swift from "../svg/Swift.svelte";
  import Ts from "../svg/TS.svelte";
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
    margin: 10px;
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
  }
</style>

{#if $currentSection === 'Programming'}
  <section>
    <h1 in:fade out:fade>Programming Fluency</h1>
    <article>
      <div in:scale={{ start: 4 }} class="logo">
        <Js />
      </div>
      <div in:scale={{ start: 4, delay: 400 }} class="logo">
        <Ts />
      </div>
      <div in:scale={{ start: 4, delay: 800 }} class="logo">
        <React />
      </div>
      <div in:scale={{ start: 4, delay: 1200 }} class="logo">
        <Kotlin />
      </div>
      <div in:scale={{ start: 4, delay: 1600 }} class="logo">
        <Swift />
      </div>
    </article>
  </section>
{/if}

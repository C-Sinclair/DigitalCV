<script>
  import { scale, fade } from "svelte/transition";
  import Section from "./Section.svelte";
  import Elixir from "../svg/Elixir.svelte";
  import Js from "../svg/JS.svelte";
  import Kotlin from "../svg/Kotlin.svelte";
  import React from "../svg/React.svelte";
  import Swift from "../svg/Swift.svelte";
  import Ts from "../svg/TS.svelte";

  const scaleIn = (n) => ({ start: 4, delay: n * 200 });
  const scaleOut = (n) => ({ end: 0, delay: n * 200 });

  const langs = [Js, Ts, React, Elixir, Kotlin, Swift];

  const name = "Programming";
</script>

<Section {name}>
  <h1 in:fade out:fade>Programming Fluency</h1>
  <ul>
    {#each langs as Lang, i}
      <li in:scale={scaleIn(i)} out:scale={scaleOut(i)} class="logo">
        <Lang />
      </li>
    {/each}
  </ul>
</Section>

<style>
  ul {
    width: 100%;
    padding: 10px 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(auto-fit, 100px);
    grid-gap: 40px;
    justify-content: space-between;
  }
  li.logo {
    left: 20px;
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
    text-align: center;
    cursor: pointer;
  }
</style>

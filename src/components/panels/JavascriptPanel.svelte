<script lang="ts">
  import { scale } from "svelte/transition";
  import { currentSection } from "../../util/scroll";
  import Js from "../svg/JS.svelte";
</script>

{#if $currentSection === "JS"}
  <div in:scale={{ start: 4 }} class="logo">
    <Js />
  </div>
{/if}

<article>
  <h1>Javascript</h1>
  <p>
    I hold a deep passion for crafting smooth interactive experiences, and there
    is no better language for user interaction than Javascript.
  </p>
  <p>
    JS was the first programming language that really interoduced me to the
    technology industry.
  </p>
  <p>
    My first tentative steps into this vast, wonderful world was through the
    lens of the HTML canvas element. I found that designing small games and
    animations was a great way to learn the language and develop on my early
    skillset.
  </p>
  <p>
    Fast forward and Javascript is a different language, and my skills have been
    battle-tested in the web domain.
  </p>
  <p>
    I find the ES6 improvements to the language and ecosystem have allowed the
    developer in the driving seat to be incredibly expressive.
  </p>
</article>

<style>
  .logo {
    position: fixed;
    /* position: absolute; */
    top: 80px;
    left: 20px;
    width: 50px;
  }
  article {
    width: 50vw;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: var(--theme-secondary);
  }
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0;
  }
</style>

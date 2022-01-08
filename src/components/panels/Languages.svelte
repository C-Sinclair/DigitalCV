<script>
  import { scale, fade, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Section from "./Section.svelte";
  import JsIcon from "./languages/Javascript.icon.svelte";
  import JsContent from "./languages/Javascript.svelte";
  import ElixirIcon from "./languages/Elixir.icon.svelte";
  import ElixirContent from "./languages/Elixir.svelte";
  import KotlinIcon from "./languages/Kotlin.icon.svelte";
  import KotlinContent from "./languages/Kotlin.svelte";
  import ReactIcon from "./languages/React.icon.svelte";
  import ReactContent from "./languages/React.svelte";
  import SwiftIcon from "./languages/Swift.icon.svelte";
  import SwiftContent from "./languages/Swift.svelte";
  import TsIcon from "./languages/Typescript.icon.svelte";
  import TsContent from "./languages/Typescript.icon.svelte";
  import { onDestroy, onMount } from "svelte";

  const scaleIn = (n) => ({ start: 4, delay: n * 200 });
  const scaleOut = (n) => ({ end: 0, delay: n * 200 });

  const langs = [
    {
      name: "Javascript",
      icon: JsIcon,
      content: JsContent,
    },
    {
      name: "Typescript",
      icon: TsIcon,
      content: TsContent,
    },
    {
      name: "React",
      icon: ReactIcon,
      content: ReactContent,
    },
    {
      name: "Elixir",
      icon: ElixirIcon,
      content: ElixirContent,
    },
    {
      name: "Kotlin",
      icon: KotlinIcon,
      content: KotlinContent,
    },
    {
      name: "Swift",
      icon: SwiftIcon,
      content: SwiftContent,
    },
  ];

  const name = "Programming";

  let selected;
  /**
   * @type {HTMLDivElement}
   */
  let details;

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 1000,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });

  function select(lang) {
    /**
     * @param event {Event}
     */
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      selected = lang;
    };
  }

  /**
   *
   * @param event {MouseEvent}
   */
  function clickOutsideDetails(event) {
    if (selected && details && !details.contains(event.target)) {
      selected = null;
    }
  }

  onMount(() => {
    window.addEventListener("click", clickOutsideDetails);
  });

  onDestroy(() => {
    window.removeEventListener("click", clickOutsideDetails);
  });
</script>

<Section {name}>
  <h1 in:fade out:fade>Programming Fluency</h1>
  {#if selected}
    <div id="details" bind:this={details}>
      <div in:receive={{ key: selected.name }} class="icon">
        <svelte:component this={selected.icon} />
      </div>
      <svelte:component this={selected.content} />
    </div>
  {:else}
    <ul>
      {#each langs as lang, i}
        <li
          in:scale={scaleIn(i)}
          out:scale={scaleOut(i)}
          class="logo"
          on:click={select(lang)}
        >
          <div out:send={{ key: lang.name }} class="icon">
            <svelte:component this={lang.icon} />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
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
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.1s ease;
  }
  li.logo:hover {
    transform: scale(1.05);
  }
  li.logo:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all 0.2s ease;
  }
  li.logo:hover:before {
    --border-size: 5px;
    top: calc(-1 * var(--border-size));
    left: calc(-1 * var(--border-size));
    width: calc(100% + var(--border-size) * 2);
    height: calc(100% + var(--border-size) * 2);
    background-color: var(--theme-trim-light);
  }
  #details {
    position: fixed;
    top: 80px;
    left: 40px;
    width: calc(100vw - 80px - 40px);
    z-index: 140;
    background-color: var(--theme-secondary);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #details .icon {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 600px) {
    #details {
      top: 20px;
      left: 20px;
      width: calc(100vw - 40px - 20px);
      padding: 10px;
    }
  }
  @media (max-width: 520px) {
    ul {
      justify-content: space-evenly;
    }
  }
</style>

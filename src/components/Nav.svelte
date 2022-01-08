<script>
  import { Link } from "svelte-routing";
  import { fly } from "svelte/transition";
  import ThemeButton from "./buttons/ThemeButton.svelte";
  import Download from "./buttons/DownloadCV.svelte";
  import { secondsPassed } from "../util/timer";

  export let segment;

  let scrollY;

  const timer = secondsPassed(1);
</script>

<svelte:window bind:scrollY />

<nav>
  {#if scrollY > 10 || $timer !== false}
    <ul>
      <li in:fly={{ y: -50, delay: 0 }} out:fly={{ y: -50, delay: 500 }}>
        <Link aria-current={segment === undefined ? "page" : undefined} to="">
          Home
        </Link>
      </li>
      <li in:fly={{ y: -50, delay: 400 }} out:fly={{ y: -50, delay: 250 }}>
        <Link
          to="contact"
          rel="prefetch"
          aria-current={segment === "contact" ? "page" : undefined}
        >
          Contact Me
        </Link>
      </li>
      <li in:fly={{ y: -50, delay: 800 }} out:fly={{ y: -50 }}>
        <a href="https://blog.sinclair.software"> Blog </a>
      </li>
    </ul>
    <ThemeButton />
    <Download />
  {/if}
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    z-index: 10;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0 0 0 10px;
  }
  li {
    padding: 20px 10px;
    position: relative;
    /* background: var(--theme-secondary); */
    border-radius: 0 0 22px 0;
    margin-right: 5px;
  }

  li :global(a) {
    text-decoration: none;
    color: var(--theme-text);
  }
  li :global(a)::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all 0.3s ease;
    background-color: var(--theme-trim);
  }
  li :global(a):hover {
    color: var(--theme-trim);
  }
  li :global(a):hover::before {
    left: 0;
    height: 3px;
    width: 100%;
  }
</style>

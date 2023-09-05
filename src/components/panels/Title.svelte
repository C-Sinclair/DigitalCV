<script>
  import { scale, fade } from "svelte/transition";
  import RoundedProfileImage from "../RoundedProfileImage.svelte";

  export let scrollY = false;
</script>

<section class:scrolled={scrollY}>
  <h1 in:fade>Conor Sinclair</h1>
  <div class="profile" in:scale={{ start: 4, delay: 800, duration: 1400 }}>
    <RoundedProfileImage />
  </div>
</section>

<style>
  section {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    padding-top: 16vh;
    transition: all 1s ease;
  }

  section.scrolled {
    padding-top: 0;
  }

  h1 {
    font-family: "Oswald", sans-serif;
    color: var(--theme-text);
    font-size: 50px;
    font-weight: 200;
    text-align: center;
    white-space: nowrap;
    width: 100vw;
    font-variant: small-caps;
    letter-spacing: 1em;
    transition: all 0.3s ease;
    margin: 40px;
  }

  section.scrolled h1 {
    letter-spacing: 0.1em;
    font-size: 2em;
    position: relative;
    margin: 10px;
  }

  .profile {
    transition: all 1s ease;
    z-index: 5;
    position: absolute;
    top: 40vh;
    right: calc(50vw - 52px);
  }

  section.scrolled .profile {
    transform: scale(0.4);
    right: -10px;
    top: -20px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 800px) {
    section.scrolled {
      padding-top: 50px;
    }
    section.scrolled h1 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 600px) {
    h1 {
      letter-spacing: 0.6em;
    }
  }
  @media (max-width: 450px) {
    h1 {
      letter-spacing: 0.4em;
    }
  }
</style>

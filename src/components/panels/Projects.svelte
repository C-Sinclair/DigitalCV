<script>
  import { fade } from "svelte/transition";
  import Section from "./Section.svelte";

  const name = "Projects";
</script>

<Section {name}>
  <h1 in:fade out:fade>Professional Projects</h1>
  <p>
    I have had the privilege of being part of the teams behind many widely
    varying products. Here is a selection of the most applications of note.
  </p>
  <article
    on:click={() => window.open("https://www.followlamplight.com/")}
    title="Follow Lamplight"
  >
    <img src="/lamplight-logo.png" alt="Lamplight logo" />
    <h4>Nursing Recruitment Platform</h4>
    <p>
      I took this application from conception to market in a staggering <b
        >72 days</b
      >. The app focuses on streamlining the process of hiring nurses, which can
      be extremely lengthy.
    </p>
  </article>
  <article
    on:click={() => window.open("https://www.talentticker.ai/")}
    title="TalentTicker"
  >
    <img src="/talentticker-logo.svg" alt="TalentTicker logo" />
    <h4>Recruitment Market Intelligence</h4>
    <p>
      I joined the frontend team at a pivotal stage of the products
      transformation from MVP to truly slick experience for the recruiters using
      the platform.
    </p>
  </article>
  <article
    on:click={() => window.open("https://mediaseal.io/")}
    title="Mediaseal"
  >
    <img src="/mediaseal-logo.png" alt="Mediaseal logo" />
    <h4>Seamless Content Security</h4>
    <p>
      Mediaseal is the market leader in post production content security and is
      in use by some serious big players like HBO, Disney and Amazon Video. I
      was part of the frontend team, modernising the legacy desktop application.
    </p>
  </article>
  <article />
</Section>

<style>
  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    cursor: pointer;
    padding: 20px;
    border-radius: 5px;
  }
  article:hover {
    border: 1px solid var(--theme-trim);
  }
  img {
    transition: transform 0.2s ease;
  }
  article:hover img {
    transform: scale(1.1);
  }
  h4 {
    font-style: italic;
    margin: 10px 0;
    padding: 5px 10px;
    background-color: var(--theme-secondary-light);
    border-radius: 5px;
  }
  article p {
    margin: 0;
    text-align: center;
  }
</style>

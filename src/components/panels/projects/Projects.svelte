<script>
  import { fade } from "svelte/transition";
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      title: "Follow Lamplight",
      logo: "/lamplight-logo.png",
      url: "https://www.followlamplight.com/",
      description: `I took this application from conception to market in a staggering 72 days. The app focuses on streamlining the process of hiring nurses, which can be extremely lengthy.`,
      subtitle: "Nursing Recruitment Platform",
    },
    {
      title: "TalentTicker",
      logo: "/talentticker-logo.svg",
      url: "https://www.talentticker.ai/",
      description: `I joined the frontend team at a pivotal stage of the products
      transformation from MVP to truly slick experience for the recruiters using
      the platform.`,
      subtitle: "Recruitment Market Intelligence",
    },
    {
      title: "Mediaseal",
      logo: "/mediaseal-logo.png",
      url: "https://mediaseal.io/",
      description: `Mediaseal is the market leader in post production content security and is
      in use by some serious big players like HBO, Disney and Amazon Video. I
      was part of the frontend team, modernising the legacy desktop application.`,
      subtitle: "Seamless Content Security",
    },
  ];
</script>

<section class="content">
  <h1 in:fade out:fade>Professional Projects</h1>
  <p>
    I have had the privilege of being part of the teams behind many widely
    varying products.
  </p>
  <p>Here is a selection of applications I have worked on.</p>
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}

  <article />
</section>

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
</style>

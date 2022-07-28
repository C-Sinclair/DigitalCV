<script>
  import Languages from "./panels/Languages.svelte";

  export let hasScrolled = false;

  let section = "about";
  const viewSection = (s) => () => {
    section = s;
  };
</script>

<section class:hasScrolled>
  <header>
    <ol>
      <li on:click={viewSection("about")} aria-current={section === "about"}>
        About Me
      </li>
      <li
        on:click={viewSection("languages")}
        aria-current={section === "languages"}
      >
        Languages
      </li>
      <li
        on:click={viewSection("projects")}
        aria-current={section === "projects"}
      >
        Projects
      </li>
    </ol>
  </header>
  {#if section === "about"}
    <article>
      <h1>Let's talk Conor</h1>
      <p>
        I'm a passionate software engineer with a deep obsession with
        understanding how technology ticks.
      </p>
    </article>
  {/if}
  {#if section === "languages"}
    <article>
      <h1>Programming Languages</h1>
      <p>
        I have a fascination with programming languages. Nothing gives me more
        joy than learning and mastering new paradigms and technologies.
      </p>
      <p>
        The syntax is the interface between coder and machine, and therefore it
        has much more powerful utility as a communication layer between the land
        of binary to the emotive mileu of human understanding.
      </p>
      <p>
        Here are a handful of the languages and frameworks I have had the
        pleasure of working with in a professional capacity
      </p>
      <ul>
        <Languages />
      </ul>
    </article>
  {/if}
  {#if section === "projects"}
    <article>
      <h1>Projects</h1>
    </article>
  {/if}
</section>

<style>
  section {
    margin: 24px;
    margin-top: 100vh;
  }
  section.hasScrolled {
    margin-top: 24px;
  }
  ol {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    padding: 12px 24px;
  }
  li[aria-current="true"] {
    background-color: var(--theme-secondary);
    border-bottom: 2px solid var(--theme-trim);
  }
  li:hover {
    background-color: var(--theme-alt);
  }
</style>

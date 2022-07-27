<script>
  let section = 'about'

  const viewSection = (s) => () => {
    section = s
  }
</script>

<section>
  <header>
    <ol>
      <li on:click={viewSection('about')}>About Me</li>
      <li on:click={viewSection('languages')}>Languages</li>
      <li on:click={viewSection('projects')}>Projects</li>
    </ol>
  </header>
  {#if section === 'about'}
    <article>
      <h1>About</h1>
    </article>
  {/if}
  {#if section === 'languages'}
    <article>
      <h1>Languages</h1>
    </article>
  {/if}
  {#if section === 'projects'}
    <article>
      <h1>Projects</h1>
    </article>
  {/if}
</section>

<style>
  section {
    height: 100vh;
  }
  header {
    background-color: var(--theme-secondary);
    border-bottom: 2px solid var(--theme-trim);
  }
  ol {
    list-style: none;
    display: flex;
  }
  li {
    cursor: pointer;
    width: 140px;
  }

</style>

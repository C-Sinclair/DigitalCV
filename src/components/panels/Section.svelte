<script lang="ts">
  import { currentSection } from "../../util/scroll";

  export let name: string;
</script>

{#if $currentSection === name}
  <section>
    <div class="wrap">
      <slot />
    </div>
  </section>
{/if}

<style>
  section {
    width: 100vw;
    position: fixed;
    top: 110px;
    z-index: 22;
  }
  .wrap {
    max-width: 500px;
    margin: 0 auto;
    max-height: calc(100vh - 110px);
    overflow-y: scroll;
  }
  .wrap > :global(h1) {
    font-family: "Dancing Script", sans-serif;
    font-size: 2em;
    color: var(--theme-trim);
    margin: 0 0 15px;
  }
  @media (max-width: 520px) {
    .wrap {
      max-width: calc(100vw - 20px);
    }
  }
</style>

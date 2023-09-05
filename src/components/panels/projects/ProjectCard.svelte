<script lang="ts">
  export let title: string;
  export let url: string;
  export let logo: string;
  export let subtitle: string;
  export let description: string;
</script>

<article {title}>
  <a href={url} target="_blank">
    <img src={logo} alt={`${title} logo`} />
    <h4>{subtitle}</h4>
    <p>
      {description}
    </p>
  </a>
</article>

<style>
  a {
    text-decoration: none;
    color: var(--theme-text);
  }
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
    width: fit-content;
  }
  article p {
    margin: 0;
    text-align: center;
  }
</style>

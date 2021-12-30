<script>
  import ThumbsUpButton from "./ThumbsUpButton.svelte";
</script>

<div class="left">
  <a
    href="https://github.com/C-Sinclair/DigitalCV"
    title="Show me the code"
    id="github"
  >
    <img src="/github-icon.png" alt="Github icon" />
  </a>
</div>

<div class="right">
  <ThumbsUpButton />
</div>

<style>
  div {
    position: fixed;
  }
  .right {
    bottom: 15px;
    right: 10px;
  }
  .left {
    left: 5px;
    bottom: 5px;
  }
  #github img {
    width: 40px;
    height: 40px;
  }
</style>

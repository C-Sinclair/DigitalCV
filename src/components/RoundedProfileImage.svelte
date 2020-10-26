<script>
  import ProfileImage from "./svg/ProfileImage.svelte";
</script>

<style>
  div {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    border: 2px solid var(--theme-trim);
    overflow: hidden;
    z-index: 22;
  }
</style>

<div>
  <ProfileImage />
</div>

<script>
  import { scale } from "svelte/transition";
  import { pushThumbsUp, thumbsUp } from "../../contexts/firebase/thumbsup";
  import ThumbsUp from "../svg/ThumbsUp.svelte";

  let hovering = false;
</script>

<style>
  div {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
  span {
    color: var(--theme-text);
    padding: 1px 0px;
    border-radius: 5px;
    position: absolute;
    right: 40px;
    top: 30px;
    border: 1px solid var(--theme-trim);
    height: 20px;
    min-width: 25px;
    text-align: center;
    background-color: var(--theme-alt);
    border-radius: 22px;
    font-family: "Inter-Loom", monospace;
  }
  button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid var(--theme-trim);
    border-radius: 25px;
    background-color: var(--theme-alt);
  }

  .first-thumb {
    animation: thumb1 infinite 1s linear forwards;
    opacity: 0;
  }
  @keyframes thumb1 {
    from {
      transform: translate(-10px, -40px) rotate(20deg);
      opacity: 1;
    }
    50% {
      transform: translate(-5px, -70px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translate(-10px, -100px) rotate(-20deg);
      opacity: 0;
    }
  }

  .second-thumb {
    animation: thumb2 infinite 1s linear forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
  @keyframes thumb2 {
    from {
      transform: translate(-20px, -40px) rotate(-10deg);
      opacity: 1;
    }
    50% {
      transform: translate(-15px, -80px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translate(-25px, -100px) rotate(10deg);
      opacity: 0;
    }
  }

  .third-thumb {
    animation: thumb3 infinite 1s linear forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }
  @keyframes thumb3 {
    from {
      transform: translate(-10px, -40px) rotate(20deg);
      opacity: 1;
    }
    50% {
      transform: translate(-5px, -85px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translate(-10px, -100px) rotate(-20deg);
      opacity: 0;
    }
  }

  .forth-thumb {
    animation: thumb4 infinite 1s linear forwards;
    animation-delay: 0.9s;
    opacity: 0;
  }
  @keyframes thumb4 {
    from {
      transform: translate(-20px, -40px) rotate(20deg);
      opacity: 1;
    }
    50% {
      transform: translate(-25px, -75px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translate(-30px, -100px) rotate(-20deg);
      opacity: 0;
    }
  }

  .fifth-thumb {
    animation: thumb5 infinite 1s linear forwards;
    animation-delay: 1.2s;
    opacity: 0;
  }
  @keyframes thumb5 {
    from {
      transform: translate(-40px, -40px) rotate(-20deg);
      opacity: 1;
    }
    50% {
      transform: translate(-42px, -70px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translate(-40px, -100px) rotate(20deg);
      opacity: 0;
    }
  }
</style>

<div
  in:scale={{ start: 4, delay: 1200, duration: 700 }}
  on:mouseover={() => {
    hovering = true;
  }}
  on:mouseleave={() => {
    hovering = false;
  }}>
  <span in:scale={{ start: 2, delay: 2000, duration: 400 }}>{$thumbsUp}</span>
  <button on:click={pushThumbsUp}>
    <ThumbsUp size={30} />
  </button>
  {#if hovering}
    <div class="first-thumb">
      <ThumbsUp size={10} />
    </div>
    <div class="second-thumb">
      <ThumbsUp size={10} />
    </div>
    <div class="third-thumb">
      <ThumbsUp size={10} />
    </div>
    <div class="forth-thumb">
      <ThumbsUp size={10} />
    </div>
    <div class="fifth-thumb">
      <ThumbsUp size={10} />
    </div>
  {/if}
</div>

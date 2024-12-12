<script>
  import { fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  export let title
  export let text
  export let url
</script>

<a
    href={url}
    class="bubble"
    transition:fly|global="{{
      duration: 1000,
      delay: 800,
      easing: quintOut,
      y: 50,
    }}"
  >
    <!-- <img src="{title}.png" alt={title} class="logos" /> -->
    <h2 class="title">{title}</h2>
    <p class="text">
      {text}
    </p>
  </a>

<style>
  
  .bubble {
    background: radial-gradient(rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.5));
    z-index: 10;
    position: relative;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 100%;
    width: 300px;
    height: 300px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
      inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
      inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
      inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

    transition: all 400ms cubic-bezier(0.47, 2.64, 0.41, 0.8);
  }

  .bubble:hover {
    transform: scale(1.1);
  }


  .title {
    text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  .logos {
    width: 75px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(-4px 8px 0.15rem rgba(0, 0, 0, 0.25));
  }

  .text {
    text-align: center;
    max-width: 22ch;
    font-weight: 400;
  }
</style>
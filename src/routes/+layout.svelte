<script>
  import { onMount } from 'svelte'

  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Wallpaper from '../components/Wallpaper.svelte'

  let ready = false

  onMount(() => (ready = true))
</script>

<img src="./bg.png" alt="" class="bg-img" />
<Header />
<Wallpaper />

<main>
  {#if ready}
    <slot />
  {/if}
</main>

<Footer />

<style>
  .bg-img {
    display: none;
  }

  main {
    margin-top: 4rem;
  }
  @media only screen and (min-width: 1024px) {
    .bg-img {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 657px;
      height: 482px;
    }
  }
</style>

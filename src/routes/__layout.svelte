<script>
  import { onMount } from 'svelte'
  
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Wallpaper from '../components/Wallpaper.svelte'

  let ready = false

  onMount(() => (ready = true))
</script>

<div class="bg-img"></div>
<Header />
<Wallpaper />

<main>
  {#if ready}
    <slot></slot>
  {/if}
</main>

<Footer />

<style>
.bg-img {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(../static/bg.png);
  background-repeat: no-repeat;
  background-position: bottom left;
}
main {
  display: grid;
  justify-items: center;
  align-items: start;
}
</style>
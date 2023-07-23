<script>
import { onMount } from "svelte";

import { changingTitles } from "$lib/data/description";

let idx = 0;
let width = 0;

onMount(() => {
  setInterval(() => {
    idx++;
    if (idx === changingTitles.length && changingTitles) {
      idx = 0;
    }
  }, 1000);
});
import Links from "$lib/components/Links.svelte";
import Brittney from "$lib/images/brittney-no-bg.png";
import Border from "$lib/components/Border.svelte";
</script>

<svelte:window bind:innerWidth="{width}" />

<div class="grid justify-center items-center min-h-screen ">
  <div class="relative">
    <div class="border-2 border-accent-400 p-4 h-52 relative top-12"></div>
    <div class="relative -top-52 p-4 grid gap-6"> 
      <img
      src="{Brittney}"
      alt="Brittney Postma"
      class="hidden md:block w-1/2 mx-auto absolute bottom-0 md:-left-[192px] lg:-left-[286.5px] lg:w-3/4" />
      <Border width="{width < 768 ? 200 : 350}">
        <h1 class="relative top-12 -mb-2">Brittney Postma</h1>
      </Border>
      <h2 class="font-sans text-2xl whitespace-nowrap">
        I am a <span class="bg-accent-400 bg-opacity-50 px-2"
          >{changingTitles[idx]}</span
        >.
      </h2>
      <section class="flex gap-6 sm:justify-between mt-4 text-primary-400">
        <Links />
      </section>
    </div>
  </div>
</div>

<style lang="postcss">
@media (max-height: 600px) {
  img {
    display: none;
  }
}
</style>

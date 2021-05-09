<script>
  import { fade } from 'svelte/transition'
  import Bubble from '../components/Bubble.svelte'
  import Beach from '../components/Beach.svelte'
</script>

<div class="container">
  <Bubble url="https://codingcat.dev" title="Coding Cat" text="Brittney is the frontend dev and designer, plus an instructor at CodingCat.dev." />
  <Bubble url="https://purrfect.dev" title="Purrfect Dev" text="Brittney is the cohost of the podcast Purrfect.dev." />
  <Bubble url="https://www.bdesigned.dev" title="bDesigned" text="Brittney runs her own freelance business, bDesigned." />
  <Bubble url="https://www.theconsolelogs.com" title="The Console Logs" text="Brittney writes notes on a number of topics at The Console Logs." />
  <Bubble url="https://academy.zerotomastery.io/courses/workshops/lectures/26936743?affcode=441520_gjue7n-1" title="ZTM Academy" text=" Brittney is an instructor over at the ZTM Academy. Watch her workshop
  on Responsive Web Design." />
  <Bubble url="https://www.redbubble.com/people/bDesigned/shop" title="RedBubble Shop" text="Brittney has a store on RedBubble for Party Corgi and other content
  created in Figma." />
</div>

<div class="beach" transition:fade="{{ duration: 1000 }}">
  <Beach />
</div>


<style>
  .beach {
    filter: drop-shadow(-4px -8px 8px rgba(3, 3, 3, 0.25));
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -2;
  }

  .container {
    padding-bottom: 8rem;
    display: grid;
    gap: 5rem;
    justify-items: center;
    z-index: 10;
  }

  @media only screen and (min-width: 800px) {
    .container {
      padding: 0 2rem;
      margin: 0 auto;
      max-width: 1440px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  }

</style>
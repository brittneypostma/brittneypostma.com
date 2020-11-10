<script>
  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  let ready = false

  onMount(() => (ready = true))
</script>

<style>
  .beach {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -2;
  }

  .bubble {
    z-index: 10;
    position: relative;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 100%;
    width: 300px;
    height: 300px;
    background: var(--light-blue);
    background: radial-gradient(
      100% 100% at 50% 0%,
      var(--light-blue) 0%,
      #bcf5ff 100%
    );
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }

  .container {
    max-width: 1440px;
    margin: 2.5rem auto;
    display: grid;
    gap: 4rem;
    justify-content: center;
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
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    .container {
      grid-template: 150px 150px 150px / 1fr 1fr 1fr;
    }

    .logs {
      grid-area: 2/2/3/3;
    }

    .ztm {
      grid-area: 3/3/-1/-1;
    }
  }
</style>

<Header />
<main>
  {#if ready}
    <div class="container">
      <a
        href="https://www.bdesigned.dev"
        class="bubble"
        transition:fly={{ duration: 1000, delay: 100, easing: quintOut, y: -150 }}>
        <img src="assets/logo.png" alt="bDesigned logo" class="logos" />
        <h2 class="title">bDesigned</h2>
        <p class="text">
          Brittney runs her own freelance business, bDesigned. See some of her
          projects or contact her about work.
        </p>
      </a>
      <a
        href="https://www.theconsolelogs.com"
        class="logs bubble"
        transition:fly={{ duration: 1000, delay: 400, easing: quintOut, y: -150 }}>
        <img src="assets/logs.png" alt="The Console Logs logo" class="logos" />
        <h2 class="title">The Console Logs</h2>
        <p class="text">
          Brittney writes notes on a number of development topics at The Console
          Logs. Read up on topics from html to advanced javascript and react.
        </p>
      </a>
      <a
        href="https://academy.zerotomastery.io/courses/workshops/lectures/26936743?affcode=441520_gjue7n-1"
        class="ztm bubble"
        transition:fly={{ duration: 1000, delay: 800, easing: quintOut, y: -150 }}>
        <img src="assets/ztm.png" alt="ZTM Academy" class="logos" />
        <h2 class="title">ZTM Academy</h2>
        <p class="text">
          Brittney is an insructor over at the ZTM Academy. Watch her workshop
          on Responsive Web Design.
        </p>
      </a>
    </div>

    <div class="beach" transition:fade={{ duration: 1000 }}>
      <svg
        width="1440"
        height="813"
        viewBox="0 0 1440 813"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1289.5 177C1394 83 1344 43.5 1440 0.5V813H357.325C182.558 834.169 -4.5 813 -4.5 813H140H357.325C456.472 800.991 551.663 775.356 606.5 724.5C681 655.409 771.017 613.01 840.5 573.5C942.5 515.5 981 410.5 1069 339C1144.03 278.04 1246.71 215.49 1289.5 177Z"
          fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1440"
            y1="799.001"
            x2="1080"
            y2="380.5"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#D59B69" />
            <stop offset="1" stop-color="#DDB184" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  {/if}
  <Footer />
</main>

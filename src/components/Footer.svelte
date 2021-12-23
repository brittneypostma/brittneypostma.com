<footer>
  <a
    aria-label="opens bDesigned facebook page in new tab"
    href="https://www.facebook.com/b.Designed11/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="facebook.png" alt="facebook" />
  </a>
  <a
    aria-label="opens Brittney Postma's twitter page in new tab"
    href="https://twitter.com/BrittneyPostma"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="twitter.png" alt="twitter" />
  </a>
  <a
    aria-label="opens Brittney Postma's linkedin in new tab"
    href="https://www.linkedin.com/in/brittney-postma-868928178/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="linkedin.png" alt="linkedin" />
  </a>
  <a
    aria-label="opens Brittney Postma's GitHub in new tab"
    href="https://github.com/brittneypostma"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="github.png" alt="github" />
  </a>
  <a
    aria-label="opens bDesigned YouTube channel in new tab"
    href="https://www.youtube.com/channel/UCyvOaBoW3Jti69U4Gw1ci9Q"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="youtube.png" alt="youtube" />
  </a>
  <a
    aria-label="opens Brittney Postma's dev.to profile in new tab"
    href="https://dev.to/brittneypostma"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src="dev.png" alt="dev" />
  </a>
</footer>

<style>
  footer {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    bottom: 0;
    position: fixed;
    gap: 1rem;
    width: 100%;
    z-index: 20;
  }
  img:hover {
    animation: wiggle 0.5s ease-in-out;
  }

  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    10%,
    30% {
      transform: rotate(-20deg);
    }
    50%,
    70%,
    90% {
      transform: rotate(-10deg);
    }
    20%,
    40%,
    60%,
    80% {
      transform: rotate(10deg);
    }
  }

  @media (min-width: 1200px) {
    footer {
      right: 0;
      padding: 0 1rem 1rem 0;
      z-index: 1;
      display: grid;
      gap: 1rem;
      justify-content: end;
    }
  }
</style>

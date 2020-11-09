<header>
  <img src="assets/brittney.svg" alt="brittney postma">
  <div class="cloud-wrapper">
  <div class="cloud" id="cloud-back"></div>
  <div class="cloud" id="cloud-mid"></div>
  <div class="cloud" id="cloud-front"></div>   
</div> 
<!--   77, 327,109, 841, 2319, 5032, 1094, 892, 6739, 512, 84 -->
<svg width="0" height="0"> 
<!--Top Layer-->
  <filter id="filter-back">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" 
seed="0" />     
    <feDisplacementMap  in="SourceGraphic" scale="170" />
  </filter>
     <filter id="filter-mid">
      <feTurbulence type="fractalNoise"  baseFrequency="0.012" numOctaves="2" 
seed="0"/>
    <feDisplacementMap  in="SourceGraphic" scale="150" />
  </filter>
  <filter id="filter-front">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" 
seed="0"/>
    <feDisplacementMap  in="SourceGraphic" scale="100" />
  </filter>
</svg>
</header>

<style>
  header {
    display: flex;
    background: var(--royal-blue);
    background: linear-gradient(var(--royal-blue), transparent);
    height: 83px;
  }

  .cloud-wrapper {
    z-index: -1;
    position: absolute;
    top: -20vh;
    right: 25vw;
  }
  
  /* CSS tricks cloud  (https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/) */
  .cloud {
    position: relative;
    width: 500px;
    height: 275px;
    border-radius: 50%;
  }

  #cloud-back {
    position: absolute;
    filter: url(#filter-back);
    box-shadow: 300px 300px 30px -20px #fff;
  }

  #cloud-mid {
    position: absolute;
    filter: url(#filter-mid);
    box-shadow: 300px 340px 70px -60px rgba(158, 168, 179, 0.5);
}

  #cloud-front {
    filter: url(#filter-front);
    box-shadow: 300px 370px 60px -100px rgba(0, 0, 0, 0.3);
  }

</style>
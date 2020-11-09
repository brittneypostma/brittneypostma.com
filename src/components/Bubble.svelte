<script>
  export let href
</script>

<a href={href}>
  <section class="bubble">
    <slot></slot>
  </section>
</a>

  <style>
    .bubble {
      position: relative;
      display: grid;
      place-items: center;
      place-content: center;
      border-radius: 100%;
      width: 300px;
      height: 300px;
      background: var(--light-blue);
      background: radial-gradient(100% 100% at 50% 0%, var(--light-blue) 0%,#BCF5FF 100%);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    }
  </style>
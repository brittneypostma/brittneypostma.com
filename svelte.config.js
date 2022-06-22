/* https://kit.svelte.dev/docs#configuration */
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
  },
}

export default config

/*
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: null
  }),
  */

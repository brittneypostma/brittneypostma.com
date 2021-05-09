/* https://kit.svelte.dev/docs#configuration */
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
    adapter: adapterStatic({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
		target: '#svelte'
	}
};

export default config;

/*
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: null
  }),
  */

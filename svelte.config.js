import preprocess from "svelte-preprocess"
/* https://kit.svelte.dev/docs#configuration */
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
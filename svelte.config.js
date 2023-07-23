import { vitePreprocess } from "@sveltejs/kit/vite";
/* https://kit.svelte.dev/docs#configuration */
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    vitePreprocess({
      postcss: true,
    }),
  ],
};

export default config;

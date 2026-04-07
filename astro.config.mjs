// @ts-check
import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeRaw],
  },
});
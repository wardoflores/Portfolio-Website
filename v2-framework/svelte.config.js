import adapter from '@sveltejs/adapter-auto';
import pkg from 'svelte-preprocess';
const { typescript } = pkg;
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer]
			  },
			scss: {
				prependData: `@import './src/style/app.scss';`
			}
		}),
		typescript({}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			  ],
			// layout: { blog: './src/routes/blog/postmdsvex.svelte' }
		})
	]
};

export default config;

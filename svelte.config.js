import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/honesty-store' : ''
		},
		prerender: {
			entries: ["*"]
		}
	}
};

export default config;

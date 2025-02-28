import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs', // Output HTML to 'docs/'
      assets: 'docs', // Output assets to 'docs/'
      fallback: 'index.html', // Ensure proper routing
    }),
    paths: {
      base: '', // Keep empty unless using GitHub Pages
      assets: '' // Ensure this is empty or absolute if used
    }
  }
};

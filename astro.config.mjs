import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  // コンテンツディレクトリの設定
  content: {
    sources: ['content'],
  },
  // ページ遷移アニメーションの有効化（新しい設定方法）
  transitions: {
    // View Transitionsを有効化
    view: true,
  },
  // Markdownの設定
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
}); 
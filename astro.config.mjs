import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	site: "https://talonpoika.me",
	integrations: [mdx(), svelte()],
	markdown: {
		shikiConfig: {
			theme: "kanagawa-dragon",
		},
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'prepend',
					content: {
						type: 'text',
						value: '⌘',
					},
					headingProperties: {
						className: ['anchor'],
					},
					properties: {
						className: ['anchor-link'],
					},
				}
			]
		],
		remarkPlugins: [
			remarkGfm,
			[
				remarkSmartypants,
				{
					quotes: false,
				},
			],
		],
	},
});

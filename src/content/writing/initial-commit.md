---
title: Initial commit
pubDate: 2024-09-22
index: 0
---

Recently, I've been reading quite a few interesting tech and non-tech blogs I've stumbled upon on, and, like many do, got the itch to start my own online plot of land to lay open my projects and writings on.

I built the first version of this site with my favourite web framework, [SvelteKit](https://kit.svelte.dev/), and the [MDsveX](https://github.com/pngwn/MDsveX) library for parsing markdown content. However, after some trouble with remark/rehype plugins missing TypeScript types and various other small misadventures I no longer remember the details of, I realized hosting what was going to be static content on top of a full web framework felt like overkill, even if I built the site statically.

Next, I started doing research on various static site generators. [Eleventy](https://www.11ty.dev/) seems like the gold standard here and claims to be simple, but my first impression after looking into the documentation was anything but. I erroneously expected "simple" to mean "opinionated", and was immediately overwhelmed by the various template languages and convoluted documentation.

Then I remembered a framework I had heard about a while back: [Astro](https://astro.build). This shiny new version of the site is built with it, on top of the default blog template. It was very easy to set up, and the blog template contained almost all the functionality I had in my SvelteKit version, except that it was all there pre-built with less code. I could also keep using Svelte components if needed! The cube spinning on the front page at the time of writing is running on the magnificent [Threlte](https://threlte.xyz/) library that binds Three.js and Svelte together. I'd like the front page to show some flashy 3D animation, and learn some shader programming while doing that.

## Testing

The color palette of the site is based on my favourite IDE theme, [Kanagawa](https://github.com/rebelot/kanagawa.nvim).

Let's see where this site grows!

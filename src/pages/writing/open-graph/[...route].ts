import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: import.meta.glob('/content/**/*.md', {eager: true}),
  getImageOptions: (path, page: any) => ({
    title: page.frontmatter.title,
    description: "Ville Talonpoika",
  }),
});

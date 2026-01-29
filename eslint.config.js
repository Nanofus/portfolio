import eslintPluginAstro, * as eslintPluginSvelte from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	...eslintPluginSvelte.configs["flat/recommended"],
];

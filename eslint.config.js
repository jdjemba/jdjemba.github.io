// @ts-check

import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'.astro/**',
			'.changeset/**',
			'.github/**',
			'dist/**',
			'node_modules/**',
			'pnpm-lock.yaml',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
	perfectionist.configs['recommended-natural'],
);

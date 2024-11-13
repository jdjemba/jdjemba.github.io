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
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
	perfectionist.configs['recommended-natural'],
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				// @ts-expect-error	ignore ts-check for this line
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/naming-convention': [
				'error',
				{
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					selector: 'variable',
				},
				{
					format: ['PascalCase'],
					selector: 'typeLike',
				},
				{
					format: ['PascalCase'],
					selector: 'class',
				},
				{
					custom: {
						match: false,
						regex: '^I[A-Z]',
					},
					format: ['PascalCase'],
					selector: 'interface',
				},
			],
		},
	},
);

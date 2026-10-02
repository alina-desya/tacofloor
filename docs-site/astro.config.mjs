// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TacoFloor Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/alina-desya/tacofloor' }],
			plugins: [
				starlightOpenAPI([
					{
						base: 'api',
						schema: '../taco-api-openapi.yaml',
						sidebar: {
							label: 'API Reference',
						},
					},
				]),
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Waiter Guide', slug: 'guides/waiter-guide' },
						{ label: 'Manager Guide', slug: 'guides/manager-guide' },
					],
				},
				...openAPISidebarGroups,
			],
		}),
	],
});

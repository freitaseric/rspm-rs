// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'RSPM Docs',
			locales: {
				root: {
					label: "English United States",
					lang: "en-us"
				},
				"pt-br": {
					label: "Português Brasileiro",
				}
			},
			social: {
				github: 'https://github.com/freitaseric/rspm-rs',
			},
			sidebar: [
				{
					label: "Start here",
					translations: {
						"pt-BR": "Começe aqui",
					},
					autogenerate: { directory: 'start' },
				},
			],
		}),
	],
});

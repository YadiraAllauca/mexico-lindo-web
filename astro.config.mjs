// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Las URLs de Open Graph y del sitemap deben ser absolutas. Vercel expone el
// dominio de producción durante el build; en local cae al servidor de desarrollo.
// Cuando tengas dominio propio, reemplaza esto por la URL fija.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
	? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		sitemap({
			// /cotizar es una utilidad para los enlaces de WhatsApp, no una página
			// que deba competir en buscadores: se queda fuera del sitemap.
			filter: (page) => !page.includes('/cotizar'),
		}),
	],
});

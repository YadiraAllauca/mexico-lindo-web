// @ts-check
import { defineConfig } from 'astro/config';

// Las etiquetas Open Graph necesitan URLs absolutas. Vercel expone el dominio de
// producción durante el build; en local cae al servidor de desarrollo.
// Cuando tengas dominio propio, reemplaza esto por la URL fija.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
	? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({ site });

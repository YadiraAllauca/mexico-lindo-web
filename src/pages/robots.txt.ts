import type { APIRoute } from 'astro';

// Se genera en el build para que la línea Sitemap lleve el dominio real:
// robots.txt exige URL absoluta y el dominio solo se conoce al desplegar.
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site).href;

	return new Response(
		`User-agent: *
Allow: /

# Página de utilidad para los enlaces de WhatsApp: sin contenido que indexar
Disallow: /cotizar

Sitemap: ${sitemap}
`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
};

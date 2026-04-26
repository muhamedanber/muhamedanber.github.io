// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [robotsTxt()],
	site: 'https://muhamedanber.space',
	vite: {
		// @ts-ignore - Tailwind CSS v4 Vite plugin type compatibility
		plugins: [tailwindcss()]
	}
});

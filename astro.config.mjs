// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://yolyoly.com'
	
	server: {
		host: '0.0.0.0',
		allowedHosts: ['test.anubisreal.es', 'localhost']
	},
	devToolbar: {
		enabled: false
	},
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		}
	}
});

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit"

import autoImport from 'sveltekit-autoimport';

export default defineConfig({
	plugins: [autoImport({ module: { '@inlang/sdk-js': ['i'] },
						   include: [/\.svelte$/],
			  			}),
			  inlangPlugin(), 
			  sveltekit()
			 ]
});

import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import MillionLint from "@million/lint";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(),MillionLint.vite()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});

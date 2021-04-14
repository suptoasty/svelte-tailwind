import { defineConfig } from "vite"
import svelte from "@sveltejs/vite-plugin-svelte"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [svelte()],
})

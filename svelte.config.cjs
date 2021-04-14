const sveltePreprocess = require("svelte-preprocess")
const smelte = require("smelte/rollup-plugin-smelte")

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true,
		}),
	],
}

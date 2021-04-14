<script lang="ts">
  import { theme } from "@/store/theme"
	import { onMount } from "svelte"
	import logo from '@/assets/svelte.png'

	import { List, ListItemGroup, ListItem } from 'svelte-materialify'

	let values = []
	onMount(async () => {
		await fetch("https://api.magicthegathering.io/v1/cards")
		.then(r => r.json())
		.then(data => {
			values = data.cards
		})
	})
</script>

<div class="container">	
	<img src={logo} alt="Svelte Logo" class="rounded-full mx-auto" />
	<h1 class="text-green-700 dark:text-blue-700">Hello Typescript!</h1>
		
	<button on:click={theme.toggleDarkTheme}>Toggle Theme</button>
	
	<p>
		Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
		apps.
	</p>
	
	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
		the officially supported framework, also powered by Vite!
	</p>

	<List>
		<ListItemGroup bind:values={values}>
			{#each values as card}
				<ListItem>
					{card.name} | Rarity: {card.rarity}
				</ListItem>
			{/each}
		</ListItemGroup>
	</List>
	
</div>

<style style lang="postcss">
  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    @apply uppercase;
    @apply text-6xl;
    @apply font-thin;
    @apply leading-tight;
    @apply my-8 mx-auto;
    @apply max-w-xs;
  }

  p {
    @apply max-w-xs;
    margin: 1rem auto;
    @apply leading-snug;
  }
</style>

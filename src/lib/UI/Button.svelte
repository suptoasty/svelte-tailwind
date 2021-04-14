<script>
	export let label = "Button"
</script>

<button on:click class="button">{label}</button>

<style style lang="postcss">
  button {
    font-family: inherit;
    font-size: inherit;
    /* Using Tailwind classes directly on your HTML elements is recommended over @apply. */
		@apply py-4 px-8;
    @apply text-blue-500;
    @apply bg-blue-600 bg-opacity-10;
    @apply rounded-full;
    @apply border-2 border-transparent;
    @apply outline-none;
    @apply w-48;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

	button:disabled {
		@apply bg-gray-500 bg-opacity-0;
	}

  button:focus {
    @apply border-opacity-100;
  }

  button:active {
    @apply bg-blue-500 bg-opacity-20;
  }
</style>
<script lang="ts">
	import { Router, Route, Link} from "svelte-navigator"

	import Home from "@/views/Home.svelte"
	import About from "@/views/About.svelte"
</script>

<Router>
	<header>
		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</nav>
	</header>

	<main>
		<Route path="/">
			<Home />
		</Route>
		<Route path="about">
			<About />
		</Route>
	</main>
</Router>
	
<style style lang="postcss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    @apply text-center;
    @apply p-4;
    @apply mx-auto;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }

    p {
      @apply max-w-none;
    }
  }
</style>

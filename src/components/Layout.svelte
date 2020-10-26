<script>
	import ThemeContext from "../contexts/theme/ThemeContext.svelte";
	import Actions from "./buttons/Actions.svelte";
	import Nav from "./Nav.svelte";

	export let segment;
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@200;400;700&display=swap");

	:global(html) {
		background: var(--theme-primary);
		color: var(--theme-text);
		overflow-x: hidden;
		overflow-y: scroll;
		transition: all 0.4s ease;
	}

	:global(body) {
		margin: 0;
	}

	:global(::-webkit-scrollbar) {
		display: none;
	}

	main {
		position: relative;
		box-sizing: border-box;
		scroll-snap-type: y mandatory;
	}

	:global(section) {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>

<ThemeContext>
	<Nav {segment} />
	<main>
		<slot />
	</main>
	<Actions />
</ThemeContext>

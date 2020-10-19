<script>
	import ThemeContext from '../contexts/ThemeContext.svelte'
	import Nav from '../components/Nav.svelte'

	export let segment
</script>

<ThemeContext>
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
</ThemeContext>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@200;400;700&display=swap');
	
	:global(html) {
    background-color: var(--theme-primary);
    color: var(--theme-text);
		overflow-x: hidden;
		overflow-y: scroll;
		transition: all 0.4s ease;
  }

	:global(::-webkit-scrollbar) {
		display: none;
	}

	main {
		position: relative;
		box-sizing: border-box;
	}
</style>
<script>
	import { fly } from 'svelte/transition'
	import ThemeButton from '../components/ThemeButton.svelte'

	export let segment

	let scrollY
</script>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		display: flex;
		justify-content: space-between;
	}
	ul {
		list-style: none;
		display: flex;
	}
	li {
		padding: 10px;
	}
</style>

<svelte:window bind:scrollY={scrollY} />

{#if scrollY > 10}
<nav>
	<ul>
		<li 
			in:fly="{{ y: -50, delay: 0 }}" 
			out:fly="{{ y: -50, delay: 500 }}">
			<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
				Home
			</a>
		</li>
		<li 
			in:fly="{{ y: -50, delay: 400 }}" 
			out:fly="{{ y: -50, delay: 250 }}">
			<a rel=prefetch aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">
				Contact Me
			</a>
		</li>
		<li 
			in:fly="{{ y: -50, delay: 800 }}" 
			out:fly="{{ y: -50 }}">
			<a href="https://blog.irrelevant.ninja">
				Blog
			</a>
		</li>
	</ul>
</nav>
{/if}

<ThemeButton />
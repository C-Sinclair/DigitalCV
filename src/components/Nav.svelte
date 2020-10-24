<script>
	import { Link } from "svelte-routing";
	import { fly } from "svelte/transition";
	import { timer } from "rxjs";
	import { startWith } from "rxjs/operators";
	import ThemeButton from "./ThemeButton.svelte";

	export let segment;

	let scrollY;
	let timeout = timer(1000).pipe(startWith(false));
</script>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		z-index: 20;
	}
	ul {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0 0 0 10px;
	}
	li {
		padding: 20px 10px;
		position: relative;
		/* background: var(--theme-secondary); */
		border-radius: 0 0 22px 0;
		margin-right: 5px;
	}

	li :global(a) {
		text-decoration: none;
		color: var(--theme-text);
	}
	li :global(a)::before {
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: 50%;
		transition: all 0.3s ease;
		background-color: var(--theme-trim);
	}
	li :global(a):hover {
		color: var(--theme-trim);
	}
	li :global(a):hover::before {
		left: 0;
		height: 3px;
		width: 100%;
	}
	.buttons {
		margin-top: 10px;
		transition: all 0.2s ease;
	}
	.scrolled.buttons {
		margin-top: 15px;
		margin-right: 60px;
	}
</style>

<svelte:window bind:scrollY />

<nav>
	{#if scrollY > 10 || $timeout !== false}
		<ul>
			<li in:fly={{ y: -50, delay: 0 }} out:fly={{ y: -50, delay: 500 }}>
				<Link aria-current={segment === undefined ? 'page' : undefined} to="">
					Home
				</Link>
			</li>
			<li in:fly={{ y: -50, delay: 400 }} out:fly={{ y: -50, delay: 250 }}>
				<Link
					to="contact"
					rel="prefetch"
					aria-current={segment === 'contact' ? 'page' : undefined}>
					Contact Me
				</Link>
			</li>
			<li in:fly={{ y: -50, delay: 800 }} out:fly={{ y: -50 }}>
				<a href="https://blog.irrelevant.ninja"> Blog </a>
			</li>
		</ul>
	{/if}
	<div class={`buttons ${scrollY > 10 ? 'scrolled' : ''}`}>
		<ThemeButton scrolled={scrollY > 10} />
	</div>
</nav>

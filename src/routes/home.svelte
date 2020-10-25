<script>
	import ThumbsUpButton from "../components/buttons/ThumbsUpButton.svelte";

	import TitlePanel from "../components/panels/TitlePanel.svelte";

	let scrolled = 0;
</script>

<style>
	section {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<svelte:head>
	<title>C Sinclair Curriclum Vitae</title>
</svelte:head>

<svelte:window bind:scrollY={scrolled} />

<TitlePanel {scrolled} />

<section>
	<p>Dev stuff</p>
</section>

<section>
	<p>Screenshots</p>
</section>

<section>
	<p>My stacks</p>
</section>

<ThumbsUpButton />

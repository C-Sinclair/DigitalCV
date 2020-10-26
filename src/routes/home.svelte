<script>
	import Buzzwords from "../components/panels/Buzzwords.svelte";
	import JavascriptPanel from "../components/panels/JavascriptPanel.svelte";
	import TitlePanel from "../components/panels/TitlePanel.svelte";
	import { secondsPassed } from "../util/timer";

	let scrollY = 0;

	const twoSecsPassed = secondsPassed(2.5);
</script>

<style>
	section {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	#buzzwords {
		display: flex;
		width: 100vw;
		justify-content: center;
		position: fixed;
		top: calc(50vh + 40px);
		z-index: 100;
	}
	#js {
		align-items: flex-end;
	}
</style>

<svelte:head>
	<title>C Sinclair Curriclum Vitae</title>
</svelte:head>

<svelte:window bind:scrollY />

<TitlePanel {scrollY} />

{#if scrollY > 10 || $twoSecsPassed !== false}
	<div id="buzzwords">
		<Buzzwords {scrollY} />
	</div>
{/if}

<section id="js">
	<JavascriptPanel />
</section>

<section>
	<p>Screenshots</p>
</section>

<section>
	<p>My stacks</p>
</section>

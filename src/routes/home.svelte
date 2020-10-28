<script>
	// import { interval } from "rxjs";
	// import { map } from "rxjs/operators";

	import Buzzwords from "../components/panels/Buzzwords.svelte";
	import JavascriptPanel from "../components/panels/JavascriptPanel.svelte";
	import Langs from "../components/panels/Langs.svelte";
	import TitlePanel from "../components/panels/TitlePanel.svelte";
	import { secondsPassed } from "../util/timer";

	let scrollY = 0;

	const twoSecsPassed = secondsPassed(2.5);

	// const alt_ = interval(1000).pipe(map((i) => (i % 2 ? "" : "_")));
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
	/* #js {
		align-items: flex-end;
	} */
	h1 {
		text-align: center;
		font-family: "Source Code Pro", monospace;
		letter-spacing: 7px;
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

<!-- <h1>Programming<span>{$alt_}</span></h1> -->

<Langs />

<!-- <section id="js">
	<JavascriptPanel />
</section> -->

<h1>Projects</h1>

<section>
	<p>Screenshots</p>
</section>

<section>
	<p>My stacks</p>
</section>

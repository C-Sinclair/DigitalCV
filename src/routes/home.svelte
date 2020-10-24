<script>
	import RoundedProfileImage from "../components/RoundedProfileImage.svelte";

	let scrolled = 0

</script>

<svelte:head>
	<title>C Sinclair Curriclum Vitae</title>
</svelte:head>

<svelte:window bind:scrollY="{scrolled}" />

<div class:scrolled>
	<h1>Conor Sinclair</h1>
	<div class="profile">
		<RoundedProfileImage />
	</div>
</div>

<div class='frame'>
	<p>Dev stuff</p>
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-family: "Oswald", sans-serif;
		color: var(--theme-text);
		font-size: 4em;
		font-weight: 200;
		text-align: center;
		font-variant: small-caps;
		letter-spacing: 1em;
		transition: all 0.3s ease;
		position: sticky;
		top: 25px;
	}

	div.scrolled h1 {
		/* font-family: "Dancing Script", cursive; */
		letter-spacing: 0.1em;
		font-size: 2em;
	}

	.profile {
		position: sticky;
		top: 0;
		transition: all 1s ease;
	}

	div.scrolled .profile {
		transform: translate(-190px, 0);
	}
</style>
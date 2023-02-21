<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '$lib/styles/style.css';
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-WQWTWT736P"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-WQWTWT736P');
	</script>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

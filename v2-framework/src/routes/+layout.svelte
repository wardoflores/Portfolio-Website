<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '$lib/styles/style.css'
  	import { fade } from 'svelte/transition';
  	// import type { RouteContext } from '@sveltejs/kit';

	import { preloadCode, preloadData } from '$app/navigation'

		// error 
		// preloadCode('/blog', '/about', '/blog/*')
		// OR:
		// error
		// preloadData('/blog', '/about', '/blog/*')


  	export let data: any;
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

{#key data.currentRoute}
  <main transition:fade={{ duration: 150, delay: 150 }}>
    <slot />
  </main>
{/key}

<Footer />
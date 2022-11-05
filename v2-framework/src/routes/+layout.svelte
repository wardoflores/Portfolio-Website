<script>
    import Header from '../lib/components/Header.svelte'
    import '$lib/styles/style.css'
	import Page from './+page.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<footer>Hello, I'm the footer. o/</footer>
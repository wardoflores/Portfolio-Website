<script type="ts">
	import { page } from "$app/stores";
  export let data;
</script>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
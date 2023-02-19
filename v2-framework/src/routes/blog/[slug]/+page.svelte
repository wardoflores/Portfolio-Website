<script type="ts">
	import { page } from "$app/stores";
  export let data
  const { title, date, Content } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <Content />
</article>
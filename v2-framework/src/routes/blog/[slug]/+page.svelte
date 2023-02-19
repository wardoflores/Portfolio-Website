<!--  -->

<!-- <script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div> -->

<!--  -->

<!-- <script lang="ts">
  import type { CoinPage } from "./page";

  export let data:CoinPage;
</script>

<h1>{data.name}</h1> -->

<!--  -->

<!-- first method=works -->

<script lang="js">

// @ts-ignore
export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}

</script>

<!-- alternate=preferred -->

<!-- <script>
  export let data
  const { title, date, Content } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <Content />
</article> -->
<script>
  export let data;
</script>

<svelte:head>
  <title>My blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

<!-- {#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category (category)}
        <li>
          <a href={`/blog/category/${category}`}>
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if} -->

<style>

  h2 .icon-link,
  h3 .icon-link,
  h4 .icon-link,
  h5 .icon-link,
  h6 .icon-link {
    position: relative;
  }
  
  h2 .icon-link::before,
  h3 .icon-link::before,
  h4 .icon-link::before,
  h5 .icon-link::before,
  h6 .icon-link::before {
    content: '#';
    position: absolute;
    left: -1ch;
    top: 0;
    line-height: 1;
    opacity: 0;
    text-decoration: underline;
  }
  
  h2:hover .icon-link::before,
  h3:hover .icon-link::before,
  h4:hover .icon-link::before,
  h5:hover .icon-link::before,
  h6:hover .icon-link::before {
    opacity: 1;
  }
  
  </style>
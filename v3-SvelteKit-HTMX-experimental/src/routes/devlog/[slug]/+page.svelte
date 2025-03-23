<!-- /src/routes/dwvlog/[slug]/+page.svelte -->
<script>
  export let data;
  import { onMount } from 'svelte';
  // Load BMC widget client-side
  onMount(() => {
    if (typeof window !== 'undefined' && !document.querySelector('[data-name="BMC-Widget"]')) {
      const script = document.createElement('script');
      script.dataset.name = "BMC-Widget";
      script.dataset.cfasync = "false";
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
      script.dataset.id = "flyingahas";
      script.dataset.description = "Support me on Buy me a coffee!";
      script.dataset.message = "*Donations for Business Bank Account > Investors*";
      script.dataset.color = "#5F7FFF";
      script.dataset.position = "Right";
      script.dataset.x_margin = "18";
      script.dataset.y_margin = "18";
      document.body.appendChild(script);
    }
  });
  let currentCurrency = 'PHP';
</script>
<svelte:head>
  <title>Kulmata devlog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>
<article>
  <h1>{ data.title }</h1>
  <h3>Published: {data.date} {#if data.revision > 1}| Revision: {data.revision} | Last updated: {data.lastUpdated}{/if}</h3>
  <svelte:component this={data.content} />
</article>

<!-- {#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category (category)}
        <li>
          <a href={`/devlog/category/${category}`}>
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if} -->

<!--<style>

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
  
  </style> -->

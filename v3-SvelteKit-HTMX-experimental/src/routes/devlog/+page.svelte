<!-- /src/routes/devlog/+page.svelte -->
<script lang="js" >
	export let data;
</script>
  
{#if data.posts && data.posts.length}
	<ul>
	  {#each data.posts as post (post.meta.slug)}
		  <h2>
			<a href={post.path}>
			  {post.meta.title}
			</a>
		  </h2>
		  <h3>Published {post.meta.formattedDate}</h3>
		  {#if post.meta.revision > 1}
		    <h3>Revision: {post.meta.revision} | Updated: {post.meta.formattedUpdated}</h3>
		  {/if}
	  {/each}
	</ul>
{:else}
	<p>No posts to display.</p>
{/if}

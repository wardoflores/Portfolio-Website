<script lang="js" >
	export let data;
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="flyingahas" data-description="Support me on Buy me a coffee!" data-message="*Donations for Business Bank Account > Investors*" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

  </script>
  
  {#if data.posts && data.posts.length}
	<ul>
	  {#each data.posts as post (post.meta.slug)}
		<li>
		  <h2>
			<a href={post.path}>
			  {post.meta.title}
			</a>
		  </h2>
		  Published {post.meta.date}
		</li>
	  {/each}
	</ul>
  {:else}
	<p>No posts to display.</p>
  {/if}


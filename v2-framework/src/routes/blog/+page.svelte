<script lang="ts">
	import type { Post } from '$lib/types';
  
	export let data: { posts?: Post[] } = { posts: undefined };
	console.log(data.posts);
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
  
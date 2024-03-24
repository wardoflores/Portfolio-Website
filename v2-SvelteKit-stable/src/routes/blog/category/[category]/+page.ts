import type { Request } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load(request: Request): Promise<{ category: string, posts: Post[] }> {
  const { category } = request.params;
  const response = await fetch(`/api/posts`);
  const allPosts = await response.json();

  const posts = allPosts.filter((post: Post) => post.meta.categories.includes(category));

  return {
    category,
    posts
  };
}

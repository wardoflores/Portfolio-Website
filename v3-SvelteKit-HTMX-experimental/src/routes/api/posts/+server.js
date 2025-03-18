import { fetchMarkdownPosts } from '$lib/utils/+index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    const getDate = (post) => post.meta.date ? new Date(post.meta.date) : new Date(0); // Treat missing dates as 1970
    return getDate(b) - getDate(a);
  });

  return json(sortedPosts);
};

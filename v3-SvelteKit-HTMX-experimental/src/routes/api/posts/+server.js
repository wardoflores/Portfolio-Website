// /api/posts/+server.js
import { fetchMarkdownPosts } from '$lib/utils/+index';
import { json } from '@sveltejs/kit';
export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    const getDate = (post) => post.meta.date ? new Date(post.meta.date) : new Date(0);
    return getDate(b) - getDate(a);
  }).map(post => {
    // Convert publication date
    const date = post.meta.date ? new Date(post.meta.date) : new Date(0);
    const formattedDate = date.toISOString().split('T')[0]; // Already yyyy-mm-dd format
    
    // Get last updated date (fallback to publication date if not available)
    const updatedDate = post.meta.updated ? new Date(post.meta.updated) : date;
    const formattedUpdated = updatedDate.toISOString().split('T')[0];
    
    // Get revision count (fallback to 1 if not available)
    const revision = post.meta.revision || 1;
    
    return {
      ...post,
      meta: {
        ...post.meta,
        formattedDate,
        formattedUpdated,
        revision
      }
    };
  });
  return json(sortedPosts);
};

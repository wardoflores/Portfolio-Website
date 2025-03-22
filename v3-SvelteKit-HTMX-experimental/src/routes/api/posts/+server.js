import { fetchMarkdownPosts } from '$lib/utils/+index';
import { json } from '@sveltejs/kit';

/**
 * Get the most recent valid date from post metadata
 * @param {Object} post - Post object with metadata
 * @returns {Date} - Valid JavaScript Date object
 */
const getLatestUpdateDate = (post) => {
  const DEFAULT_DATE = new Date(0); // Fallback to epoch date
  try {
    return post.meta.updated 
      ? new Date(post.meta.updated)
      : post.meta.date 
        ? new Date(post.meta.date)
        : DEFAULT_DATE;
  } catch {
    return DEFAULT_DATE;
  }
};

/**
 * Format ISO date string to YYYY-MM-DD
 * @param {Date} date - JavaScript Date object
 * @returns {string} - Formatted date string
 */
const formatDateISO = (date) => {
  if (!(date instanceof Date)) return '1970-01-01'; // Fixed syntax
  return date.toISOString().split('T')[0];
};

export const GET = async () => {
  try {
    const posts = await fetchMarkdownPosts();
    
    const processedPosts = posts.map(post => {
      const publishedDate = post.meta.date ? new Date(post.meta.date) : new Date(0);
      const lastUpdated = getLatestUpdateDate(post);
      
      return {
        // Ensure we're returning the slug/path
        slug: post.path.replace('/blog/', ''),
        meta: {
          ...post.meta,
          title: post.meta.title || 'Untitled Post',
          publishedDate: formatDateISO(publishedDate),
          lastUpdated: formatDateISO(lastUpdated),
          revision: post.meta.revision || 1,
          categories: post.meta.categories || []
        }
      };
    });

    const sortedPosts = processedPosts.sort((a, b) => 
      new Date(b.meta.lastUpdated) - new Date(a.meta.lastUpdated)
    );

    return json({ posts: sortedPosts });
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    return json({ error: error.message }, { status: 500 });
  }
};

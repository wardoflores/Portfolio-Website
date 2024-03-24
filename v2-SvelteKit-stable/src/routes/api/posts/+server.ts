import { fetchMarkdownPosts } from '$lib/utils/+index';
import { json } from '@sveltejs/kit';

// https://stackoverflow.com/a/60432389/14064195

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	// https://stackoverflow.com/a/68876658/14064195
	const sortedPosts = allPosts.sort((a: any, b: any) => {
		return +new Date(b.meta.date) - +new Date(a.meta.date);
	});

	return json(sortedPosts);
};

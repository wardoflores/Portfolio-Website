// /src/routes/devlog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, updated, revision } = post.metadata;
	const content = post.default;
	
	// Format dates to yyyy-mm-dd
	const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
	const formattedUpdated = updated ? new Date(updated).toISOString().split('T')[0] : formattedDate;
	const revisionCount = revision || 1;
	
	return {
		content,
		title,
		date: formattedDate,
		lastUpdated: formattedUpdated,
		revision: revisionCount
	};
}

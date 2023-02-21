import type { Response } from '@sveltejs/kit';

export interface Post {
    id: number;
    title: string;
    content: string;
}

export const load = async ({ fetch }: { fetch: any }): Promise<{ posts: Post[] }> => {
    const response: Response = await fetch(`/api/posts`);
    const posts: Post[] = await response.json();

    return { posts };
};

// src/routes/blog/[...slug]/+page.server.js
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
  // params.slug is an array of all path segments after /blog
  const newPath = `/devlog/${params.slug.join('/')}`;
  throw redirect(301, newPath);
}


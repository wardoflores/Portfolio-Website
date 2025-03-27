// src/hooks.server.js
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  // If the request pathname starts with /blog (except maybe for static assets), redirect it
  if (event.url.pathname.startsWith('/blog')) {
    // Replace '/blog' with '/devlog'
    const newPath = event.url.pathname.replace(/^\/blog/, '/devlog');
    throw redirect(301, newPath);
  }
  return resolve(event);
}


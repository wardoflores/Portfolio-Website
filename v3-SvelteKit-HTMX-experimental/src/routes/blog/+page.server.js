// src/routes/old-route/+page.server.js
import { redirect } from '@sveltejs/kit';

export function load() {
  // This throws a 301 (permanent) redirect to the new URL
  throw redirect(301, '/devlog');
}


import type { Request } from '@sveltejs/kit';

export const load = ({ url }: Request) => {
  const currentRoute = url.pathname;

  return {
    currentRoute
  };
};

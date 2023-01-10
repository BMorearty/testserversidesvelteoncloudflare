import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  return { env: JSON.stringify(process.env, null, 2) };
};

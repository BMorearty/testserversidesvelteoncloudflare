import type { PageServerLoad } from './$types';
import process from 'node:process';

export const load: PageServerLoad = () => {
  return { env: JSON.stringify(process.env, null, 2) };
};

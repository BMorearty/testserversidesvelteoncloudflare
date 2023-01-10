import type { PageServerLoad } from './$types';
import * as env from '$env/static/private';

export const load: PageServerLoad = () => {
  return { env: JSON.stringify(env, null, 2) };
};

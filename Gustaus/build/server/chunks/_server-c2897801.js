import { j as json } from './index-2b68e648.js';
import { i as initState, r as reloadResources, b as getResource } from './state-53e380b5.js';
import './utils-fdb1ab73.js';

const entries = async () => {
  const { languages } = await initState(await import('./inlang.config-5d563540.js'));
  return languages.map((language) => ({ language }));
};
const GET = async ({ params: { language } }) => {
  await reloadResources();
  return json(getResource(language) || null);
};

export { GET, entries };
//# sourceMappingURL=_server-c2897801.js.map

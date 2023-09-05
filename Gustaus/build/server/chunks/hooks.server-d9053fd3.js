import { i as initHandleWrapper } from './wrappers-740e98a0.js';
import './state-53e380b5.js';
import { D as DIRECTUS_URL } from './private-027d6d73.js';
import './utils-fdb1ab73.js';

const handle = initHandleWrapper({
  inlangConfigModule: import('./inlang.config-5d563540.js'),
  excludedRoutes: [],
  getLanguage: () => void 0
}).use(async ({ resolve, event }) => {
  const response = await resolve(event);
  if (event.url.pathname.startsWith("/")) {
    response.headers.append("Access-Control-Allow-Origin", DIRECTUS_URL);
  }
  return response;
});

export { handle };
//# sourceMappingURL=hooks.server-d9053fd3.js.map

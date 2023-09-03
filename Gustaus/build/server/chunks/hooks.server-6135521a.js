import { D as DIRECTUS_URL } from './private-65092210.js';

const handle = async ({ resolve, event }) => {
  const response = await resolve(event);
  if (event.url.pathname.startsWith("/")) {
    response.headers.append("Access-Control-Allow-Origin", DIRECTUS_URL);
  }
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-6135521a.js.map

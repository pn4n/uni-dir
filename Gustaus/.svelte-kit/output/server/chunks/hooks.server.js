import { D as DIRECTUS_URL } from "./private.js";
const handle = async ({ resolve, event }) => {
  const response = await resolve(event);
  if (event.url.pathname.startsWith("/")) {
    response.headers.append("Access-Control-Allow-Origin", DIRECTUS_URL);
  }
  return response;
};
export {
  handle
};

import { createDirectus, staticToken } from "@directus/sdk";
import { rest } from "@directus/sdk/rest";
import { D as DIRECTUS_URL, a as DIRECTUS_TOKEN } from "./private.js";
const directus = createDirectus(DIRECTUS_URL).with(staticToken()).with(rest());
function getDirectusClient() {
  directus.setToken(DIRECTUS_TOKEN);
  return directus;
}
export {
  getDirectusClient as g
};

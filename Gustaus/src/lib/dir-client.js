import { createDirectus, staticToken } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';
// import { staticToken } from '@directus/sdk/re';

import { DIRECTUS_URL } from '$env/static/private';
import { DIRECTUS_TOKEN } from '$env/static/private';
// import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD } from '$env/static/private';
const directus = createDirectus(DIRECTUS_URL).with(staticToken()).with(rest())

function getDirectusClient() {
    // const directus = createDirectus(DIRECTUS_TOKEN).with(staticToken()).with(rest())
    directus.setToken(DIRECTUS_TOKEN)
	return directus;
}

export { getDirectusClient };
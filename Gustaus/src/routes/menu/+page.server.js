import { readItems, createItem } from '@directus/sdk/rest';

import { getDirectusClient } from '$lib/dir-client.js';
import { fail } from 'assert';
import { categorizeItems } from '$lib/utils';


/** @type {import('./$types').PageServerLoad} */
export async function load() {

  return {
    streamed: {
      dir: new Promise(async (resolve) => {
        const dir = getDirectusClient()

        const items = await dir.request(readItems('items'))
        let categories = await dir.request(readItems('categories'))
        // SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs
        await new Promise((fulfil) => setTimeout(fulfil, 10000));
        const cat_expaned = categorizeItems(categories, items)
        resolve({ menu_items: cat_expaned, items: items, url: dir.url.origin })
      }),
    }
  }
};

export const actions = {
  default: async ({ request }) => {

    // artificial delay 
    // await new Promise((fulfil) => setTimeout(fulfil, 1000));

    const dir = getDirectusClient()

    const data = await request.formData();

    const item_object = {

      user_info: 'Email: ' + data.get('email') +
        ', Phone: ' + data.get('phone') +
        ', Address: ' + data.get('address') +
        ', Comment: ' + data.get('comment'),
      request_info: data.get('order')
    }

    try {
      await dir.request(createItem('requests', item_object));
      return { success: true }
    } catch {
      return fail('error')
    }
  },
};

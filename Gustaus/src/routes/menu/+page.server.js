import { readItems, createItem } from '@directus/sdk/rest';

import { getDirectusClient } from '$lib/dir-client.js';
import { fail } from 'assert';


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const dir = getDirectusClient()
    
    const items = await dir.request(readItems('items'))
    let categories = await dir.request(readItems('categories'))

    // merging categories with items
    const categories_expaned = categories.map(category => {
        const items_full = category.items.map(itemId => {
          const item = items.find(item => item.id === itemId);
          return {...item};
        });
        return {...category, items: items_full};
      })

    return  { menu_items:categories_expaned, items:items }
};

export const actions = {
	default: async ({request}) => {

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
      return {success:true}
    } catch {
      return fail('error')
    }
  },
	// register: async (event) => {
	// 	// TODO register the user
	// }
};
  
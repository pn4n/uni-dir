import { readItems, createItem } from '@directus/sdk/rest';

import { getDirectusClient } from '$lib/dir-client.js';

export async function load() {
  const dir = getDirectusClient()

  const reviews = await dir.request(readItems('reviews', {
		sort: '-date_created', //Sort by creation date descending
	}))

  return  { reviews }
};

export const actions = {
	default: async ({request}) => {

		// artificial delay 
		// await new Promise((fulfil) => setTimeout(fulfil, 1000));

    const dir = getDirectusClient()

    const data = await request.formData();

    const item_object = {
      
      name: data.get('name'), 
      text: data.get('text'),
      rating: data.get('rating'),
                    
    }
    

    try {
      await dir.request(createItem('reviews', item_object));
      return {success: true}
    } catch {
      return {success: false}}
  },
};
  
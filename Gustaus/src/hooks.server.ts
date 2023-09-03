import type { Handle } from '@sveltejs/kit';
import { DIRECTUS_URL } from '$env/static/private'

export const handle: Handle = async ({ resolve, event }) => {

      // Apply CORS header for API routes
    //   if (event.url.pathname.startsWith('/')) {
    //     // Required for CORS to work
    //     if(event.request.method === 'OPTIONS') {
    //       return new Response(null, {
    //         headers: {
    //           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //           'Access-Control-Allow-Origin': '*',
    //           'Access-Control-Allow-Headers': '*',
    //         }
    //       });
    //     }
    //   }
    
      const response = await resolve(event);
      if (event.url.pathname.startsWith('/')) {
            response.headers.append('Access-Control-Allow-Origin', DIRECTUS_URL);
      }
      return response;
    };


// console.log('origign:', event.request.headers.get('origin') || '')
// let originDomain = new URL(event.request.headers.get('origin') || '').hostname;
//     console.log(originDomain)

//   const response = await resolve(event);
//   if (event.url.pathname.startsWith('/api')) {
//     response.headers.append('Access-Control-Allow-Origin', DIRECTUS_URL);
//   }
//   return response;
// }
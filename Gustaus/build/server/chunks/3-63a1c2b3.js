import { g as getDirectusClient, h as ho, T as Te } from './dir-client-4203617b.js';
import { fail } from 'assert';
import { c as categorizeItems } from './utils-1b30cef5.js';
import './private-65092210.js';

async function load() {
  return {
    streamed: {
      dir: new Promise(async (resolve) => {
        const dir = getDirectusClient();
        const items = await dir.request(ho("items"));
        let categories = await dir.request(ho("categories"));
        await new Promise((fulfil) => setTimeout(fulfil, 1e4));
        const cat_expaned = categorizeItems(categories, items);
        resolve({ menu_items: cat_expaned, items, url: dir.url.origin });
      })
    }
  };
}
const actions = {
  default: async ({ request }) => {
    const dir = getDirectusClient();
    const data = await request.formData();
    const item_object = {
      user_info: "Email: " + data.get("email") + ", Phone: " + data.get("phone") + ", Address: " + data.get("address") + ", Comment: " + data.get("comment"),
      request_info: data.get("order")
    };
    try {
      await dir.request(Te("requests", item_object));
      return { success: true };
    } catch {
      return fail("error");
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-11970021.js')).default;
const server_id = "src/routes/menu/+page.server.js";
const imports = ["_app/immutable/nodes/3.10b47a26.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js","_app/immutable/chunks/LoadingDirectus.9ed10323.js","_app/immutable/chunks/each.c9799802.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.2c3c6234.js","_app/immutable/chunks/singletons.f67ce179.js","_app/immutable/chunks/forms.93aa2486.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/3.2a6ec6b2.css","_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-63a1c2b3.js.map

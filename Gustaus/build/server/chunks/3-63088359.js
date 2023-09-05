import { g as getDirectusClient, h as ho, T as Te } from './dir-client-7bb88847.js';
import { fail } from 'assert';
import { c as categorizeItems } from './utils3-c01caed0.js';
import './private-027d6d73.js';
import './Toasts.svelte_svelte_type_style_lang-96cd2bd3.js';
import './utils-fdb1ab73.js';
import './index2-5001341d.js';
import './utils2-05c95967.js';

async function load() {
  return {
    streamed: {
      dir: new Promise(async (resolve) => {
        const dir = getDirectusClient();
        const items = await dir.request(ho(
          "items",
          {
            deep: { translations: {} },
            fields: ["*", { translations: ["*"] }]
          }
        ));
        let categories = await dir.request(ho(
          "categories",
          {
            deep: { translations: {} },
            fields: ["*", { translations: ["*"] }]
          }
        ));
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
const component = async () => component_cache ??= (await import('./_page.svelte-46c087ba.js')).default;
const server_id = "src/routes/menu/+page.server.js";
const imports = ["_app/immutable/nodes/3.3125e650.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/index.99c81ec3.js","_app/immutable/chunks/LoadingDirectus.a02b2fb1.js","_app/immutable/chunks/context.872a4bfa.js","_app/immutable/chunks/singletons.03378d0c.js","_app/immutable/chunks/each.746c78c9.js","_app/immutable/chunks/utils.43e38468.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.b99f9af5.js","_app/immutable/chunks/forms.1ba9677d.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/3.f9167168.css","_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-63088359.js.map

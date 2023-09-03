import { g as getDirectusClient, h as ho, T as Te } from './dir-client-4203617b.js';
import './index-2b68e648.js';
import './private-65092210.js';

async function load() {
  return {
    streamed: {
      reviews: new Promise(async (resolve) => {
        const dir = getDirectusClient();
        const reviews = await dir.request(ho("reviews", {
          sort: "-date_created"
          //Sort by creation date descending
        }));
        resolve(reviews);
      })
    }
  };
}
const actions = {
  default: async ({ request }) => {
    const dir = getDirectusClient();
    const data = await request.formData();
    const item_object = {
      name: data.get("name"),
      text: data.get("text"),
      rating: data.get("rating")
    };
    try {
      await dir.request(Te("reviews", item_object));
      return { success: true };
    } catch {
      return { success: false };
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-890f1bfe.js')).default;
const server_id = "src/routes/reviews/+page.server.js";
const imports = ["_app/immutable/nodes/5.e065bef6.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js","_app/immutable/chunks/LoadingDirectus.9ed10323.js","_app/immutable/chunks/each.c9799802.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/forms.0ef67cb2.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.8882d19d.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.887e7ed7.js"];
const stylesheets = ["_app/immutable/assets/5.691d881d.css","_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-a312f4f3.js.map

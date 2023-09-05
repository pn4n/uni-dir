import { g as getDirectusClient, h as ho, T as Te } from './dir-client-7bb88847.js';
import './index-2b68e648.js';
import './private-027d6d73.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-f1f67581.js')).default;
const server_id = "src/routes/reviews/+page.server.js";
const imports = ["_app/immutable/nodes/5.590ac63f.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/index.99c81ec3.js","_app/immutable/chunks/LoadingDirectus.a02b2fb1.js","_app/immutable/chunks/context.872a4bfa.js","_app/immutable/chunks/singletons.03378d0c.js","_app/immutable/chunks/each.746c78c9.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/forms.1ba9677d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/utils.43e38468.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.b99f9af5.js"];
const stylesheets = ["_app/immutable/assets/5.691d881d.css","_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-45b29146.js.map

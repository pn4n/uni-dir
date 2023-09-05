import { g as getDirectusClient, T as Te } from './dir-client-7bb88847.js';
import './private-027d6d73.js';

const actions = {
  default: async ({ request }) => {
    const dir = getDirectusClient();
    const data = await request.formData();
    const item_object = {
      user_info: "Email: " + data.get("email") + ", Телефон: " + data.get("phone") + ", Комментарий: " + data.get("comment"),
      request_info: "Дата: " + data.get("date") + ",Время: " + data.get("time") + ", Кол-во человек: " + data.get("people")
    };
    try {
      await dir.request(Te("requests", item_object));
      return { success: true };
    } catch {
      return { success: false };
    }
  }
  // register: async (event) => {
  // 	// TODO register the user
  // }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b3992b5d.js')).default;
const server_id = "src/routes/reserve/+page.server.js";
const imports = ["_app/immutable/nodes/4.869243c6.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/index.99c81ec3.js","_app/immutable/chunks/context.872a4bfa.js","_app/immutable/chunks/singletons.03378d0c.js","_app/immutable/chunks/forms.1ba9677d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/utils.43e38468.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.b99f9af5.js"];
const stylesheets = ["_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-814c3c45.js.map

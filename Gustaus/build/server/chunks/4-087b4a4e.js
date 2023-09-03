import { g as getDirectusClient, T as Te } from './dir-client-4203617b.js';
import './private-65092210.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-57e2e468.js')).default;
const server_id = "src/routes/reserve/+page.server.js";
const imports = ["_app/immutable/nodes/4.c16e6bcc.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js","_app/immutable/chunks/forms.0ef67cb2.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.8882d19d.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.887e7ed7.js"];
const stylesheets = ["_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-087b4a4e.js.map

import * as server from '../entries/pages/menu/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/menu/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/menu/+page.server.js";
export const imports = ["_app/immutable/nodes/3.d889946a.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js","_app/immutable/chunks/LoadingDirectus.9ed10323.js","_app/immutable/chunks/each.c9799802.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.da0ae53f.js","_app/immutable/chunks/singletons.d03b53be.js","_app/immutable/chunks/forms.c000682b.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/3.2a6ec6b2.css","_app/immutable/assets/Toasts.3c94672f.css"];
export const fonts = [];

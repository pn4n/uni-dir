import * as server from '../entries/pages/reviews/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reviews/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/reviews/+page.server.js";
export const imports = ["_app/immutable/nodes/5.41f2a17a.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js","_app/immutable/chunks/LoadingDirectus.9ed10323.js","_app/immutable/chunks/each.c9799802.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/forms.c000682b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d03b53be.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.da0ae53f.js"];
export const stylesheets = ["_app/immutable/assets/5.691d881d.css","_app/immutable/assets/Toasts.3c94672f.css"];
export const fonts = [];

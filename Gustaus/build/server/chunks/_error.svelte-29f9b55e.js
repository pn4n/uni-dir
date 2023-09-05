import { c as create_ssr_component, b as escape } from './ssr-58f9b3e9.js';
import { g as getRuntimeFromContext } from './context-b6dcdab0.js';
import './utils2-05c95967.js';
import './utils-fdb1ab73.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i } = getRuntimeFromContext();
  return `<main class="error"><section><div class="container"><h1>${escape(i("error.header"))}</h1> <p><a href="/">${escape(i("error.text"))}</a></p></div></section> </main>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-29f9b55e.js.map

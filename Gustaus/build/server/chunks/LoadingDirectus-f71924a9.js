import { c as create_ssr_component, b as escape } from './ssr-58f9b3e9.js';
import { g as getRuntimeFromContext } from './context-b6dcdab0.js';

const LoadingDirectus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i } = getRuntimeFromContext();
  return `<article><progress></progress> <p>${escape(i("directus_load"))}</p> </article>`;
});

export { LoadingDirectus as L };
//# sourceMappingURL=LoadingDirectus-f71924a9.js.map

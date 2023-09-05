import { c as create_ssr_component, b as escape, e as each } from './ssr-58f9b3e9.js';
import { g as getRuntimeFromContext } from './context-b6dcdab0.js';
import { s as split_text } from './utils3-c01caed0.js';
import './utils2-05c95967.js';
import './utils-fdb1ab73.js';
import './Toasts.svelte_svelte_type_style_lang-96cd2bd3.js';
import './index2-5001341d.js';

const css = {
  code: "h1.svelte-1awdgha{font-weight:200}p.svelte-1awdgha:not(.info){text-indent:30px}img.svelte-1awdgha{margin:0 auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i } = getRuntimeFromContext();
  $$result.css.add(css);
  return `<div class="grid"><div><h1 class="svelte-1awdgha">${escape(i("home.header"))}</h1> ${each(split_text(i("home.text")), (paragraph) => {
    return `<p class="svelte-1awdgha"><!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END --></p>`;
  })}</div> <div data-svelte-h="svelte-9ctvvu"><img src="/main/hero.webp" alt="Hero" class="svelte-1awdgha"></div></div> <hr> <div class="grid"><h1 class="svelte-1awdgha">${escape(i("home.contacts.header"))}</h1> <p class="info svelte-1awdgha">${each(split_text(i("home.contacts.text")), (paragraph) => {
    return `<!-- HTML_TAG_START -->${paragraph}<!-- HTML_TAG_END -->`;
  })}</p> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c6946f98.js.map

import { g as getContext, c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component, f as set_store_value, m as missing_component } from "../../chunks/ssr.js";
import { p as position, o as objectMerge, t as toast, D as DEFAULT_ANIMATION } from "../../chunks/Toasts.svelte_svelte_type_style_lang.js";
const pico = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Navbar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1eh7bfx{padding:0.5rem 1rem;margin-bottom:2rem ;border-bottom:1px solid var(--primary);background-color:var(--form-element-focus-color)}a.svelte-1eh7bfx{display:flex;justify-content:space-evenly;padding:0.5rem;height:min-content;margin:auto}a[aria-current='true'].svelte-1eh7bfx{color:var(--inverse);border-radius:5px;border-left:1px solid var(--primary);border-right:1px solid var(--primary)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let nav_items = [
    { "link": "/", "title": "Главная" },
    { "link": "/menu", "title": "Меню" },
    {
      "link": "/reserve",
      "title": "Резервация"
    },
    { "link": "/reviews", "title": "Отзывы" }
  ];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="svelte-1eh7bfx"><img src="/logo.png" alt="logo"> ${each(nav_items, (route) => {
    return `<a${add_attribute("href", route.link, 0)}${add_attribute("aria-current", $page.route.id === route.link, 0)} class="svelte-1eh7bfx">${escape(route.title)}</a>`;
  })} </nav>`;
});
const ICON_PATHS = {
  attention: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  error: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  info: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
  success: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  warning: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
  promise: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"${add_attribute("d", ICON_PATHS[type], 0)}></path></svg>`;
});
const css$2 = {
  code: ".svoast.svelte-p7mxcr{background:var(--svoast-bg, #333);color:var(--svoast-text, #fff);padding:var(--svoast-padding, 12px 15px 12px 18px);border-radius:var(--svoast-radius, 4px);box-shadow:var(--svoast-shadow, 0 2px 7px hsla(0, 0%, 0%, 0.25));font-size:var(--svoast-font-size, 14px);position:relative;overflow:hidden;pointer-events:all;display:flex;gap:var(--svoast-dismiss-gap, 8px);max-width:var(--svoast-max-width, unset)}.svoast-bar.svelte-p7mxcr{position:absolute;top:0;left:0;width:var(--svoast-bar-width, 3px);height:100%;background:var(--svoast-colour)}.svoast-icon.svelte-p7mxcr{min-width:var(--svoast-icon-size, 21px);min-height:var(--svoast-icon-size, 21px);max-width:var(--svoast-icon-size, 21px);max-height:var(--svoast-icon-size, 21px);color:var(--svoast-colour)}.svoast-icon.promise.svelte-p7mxcr{animation:svelte-p7mxcr-promiseSpin 1s linear infinite}.svoast-dismiss.svelte-p7mxcr{min-width:var(--svoast-icon-size, 21px);min-height:var(--svoast-icon-size, 21px);max-width:var(--svoast-icon-size, 21px);max-height:var(--svoast-icon-size, 21px);padding:var(--svoast-icon-padding, 2px)}.svoast.info.svelte-p7mxcr{--svoast-colour:var(--svoast-info-colour, #888)}.svoast.attention.svelte-p7mxcr{--svoast-colour:var(--svoast-attention-colour, #38bdf8)}.svoast.success.svelte-p7mxcr{--svoast-colour:var(--svoast-success-colour, #4ade80)}.svoast.warning.svelte-p7mxcr{--svoast-colour:var(--svoast-warning-colour, #fb923c)}.svoast.error.svelte-p7mxcr{--svoast-colour:var(--svoast-error-colour, #ef4444)}@keyframes svelte-p7mxcr-promiseSpin{from{rotate:0deg}to{rotate:360deg}}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $position, $$unsubscribe_position;
  $$unsubscribe_position = subscribe(position, (value) => $position = value);
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$2);
  $$unsubscribe_position();
  return `<div id="${"svoast-" + escape(toast2.id, true)}" class="${"svoast " + escape(toast2.type, true) + " svelte-p7mxcr"}"${add_attribute("data-position", $position, 0)} aria-live="polite" role="status"><div class="svoast-bar svelte-p7mxcr"></div> <div class="${"svoast-icon " + escape(toast2.type, true) + " svelte-p7mxcr"}">${validate_component(Icon, "Icon").$$render($$result, { type: toast2.type }, {}, {})}</div> <div class="svoast-message">${toast2.rich ? `<!-- HTML_TAG_START -->${toast2.message}<!-- HTML_TAG_END -->` : `${escape(toast2.message)}`}</div> ${toast2.closable && toast2.type !== "promise" ? `<button type="button" class="svoast-dismiss svelte-p7mxcr" data-svelte-h="svelte-1idfpxp"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>` : ``} </div>`;
});
const css$1 = {
  code: ".svoast-container.svelte-1b4y51c{position:fixed;padding:var(--svoast-offset, 16px);top:0;height:100%;width:100%;pointer-events:none;z-index:999;display:flex;flex-direction:column;gap:var(--svoast-gap, 16px);overflow:hidden}.svoast-container[data-position*=center].svelte-1b4y51c{align-items:center}.svoast-container[data-position*=bottom].svelte-1b4y51c{justify-content:flex-end}.svoast-container[data-position*=center].svelte-1b4y51c{left:50%;transform:translateX(-50%)}.svoast-container[data-position*=-left].svelte-1b4y51c{left:0;align-items:flex-start}.svoast-container[data-position*=-right].svelte-1b4y51c{right:0;align-items:flex-end}.svoast-wrapper[data-position=bottom-center].svelte-1b4y51c{transform-origin:bottom center}.svoast-wrapper[data-position=bottom-left].svelte-1b4y51c{transform-origin:bottom left}.svoast-wrapper[data-position=bottom-right].svelte-1b4y51c{transform-origin:bottom right}.svoast-wrapper[data-position=top-center].svelte-1b4y51c{transform-origin:top center}.svoast-wrapper[data-position=top-left].svelte-1b4y51c{transform-origin:top left}.svoast-wrapper[data-position=top-right].svelte-1b4y51c{transform-origin:top right}",
  map: null
};
const Toasts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toastPos, $$unsubscribe_toastPos;
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toastPos = subscribe(position, (value) => $toastPos = value);
  $$unsubscribe_toasts = subscribe(toast, (value) => $toasts = value);
  let { position: position$1 = "bottom-left" } = $$props;
  let { animation = void 0 } = $$props;
  let { component = void 0 } = $$props;
  set_store_value(position, $toastPos = position$1, $toastPos);
  objectMerge(DEFAULT_ANIMATION, animation);
  if ($$props.position === void 0 && $$bindings.position && position$1 !== void 0)
    $$bindings.position(position$1);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  $$result.css.add(css$1);
  $$unsubscribe_toastPos();
  $$unsubscribe_toasts();
  return `<div class="svoast-container svelte-1b4y51c"${add_attribute("data-position", position$1, 0)}>${each($toasts, (toast2) => {
    return `<div class="svoast-wrapper svelte-1b4y51c"${add_attribute("data-position", position$1, 0)}>${toast2?.component?.[0] || component ? (() => {
      let { component: _, ...props } = toast2;
      return ` ${validate_component(toast2?.component?.[0] || component || missing_component, "svelte:component").$$render($$result, Object.assign({}, props), {}, {})}`;
    })() : `${validate_component(Toast, "Toast").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
  })} </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-e8pf5q{margin-top:3rem}@media(min-width: 780px){main.svelte-e8pf5q{margin:0 6rem}}main h1, \n            main h2, \n            main h3, \n            main h4, \n            main h5, \n            main h6, \n            main p{padding:0 0.5rem;font-weight:200}:root{--svoast-bar-width:3px;--svoast-font-size:19px;--svoast-bg:#11191f}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <main class="svelte-e8pf5q">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Toasts, "Toasts").$$render($$result, { position: "bottom-center" }, {}, {})}`;
});
export {
  Layout as default
};

import { g as get_store_value } from './utils2-05c95967.js';
import { g as getContext, s as setContext } from './ssr-58f9b3e9.js';
import { i as inlangSymbol } from './utils-fdb1ab73.js';

const getRuntimeFromContext$1 = () => {
  return getContext(inlangSymbol);
};
const addRuntimeToContext$1 = (context) => setContext(inlangSymbol, context);
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
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
const getRuntimeFromContext = () => getRuntimeFromContext$1();
const addRuntimeToContext = (runtime) => {
  const { language, referenceLanguage, languages, i, loadResource } = runtime;
  const switchLanguage = async (language2) => {
    if (runtime.language === language2)
      return;
    localStorage.setItem("language", language2);
    runtime.switchLanguage(language2);
    return goto(get_store_value(page).url, { invalidateAll: true, noScroll: true });
  };
  addRuntimeToContext$1({
    language,
    referenceLanguage,
    languages,
    i,
    loadResource,
    switchLanguage,
    route
  });
};
const route = (href) => {
  return href;
};

export { addRuntimeToContext as a, getRuntimeFromContext as g, page as p };
//# sourceMappingURL=context-b6dcdab0.js.map

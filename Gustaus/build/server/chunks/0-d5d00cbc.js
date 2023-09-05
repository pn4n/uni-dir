import { d as detectLanguage, a as initRuntimeWithLanguageInformation, b as initRootLayoutServerLoadWrapper } from './wrappers-740e98a0.js';
import { b as base } from './paths-05fee424.js';
import { a as addRuntimeToData, g as getRuntimePromiseFromEvent, w as wait, b as addRuntimePromiseToEvent } from './utils-fdb1ab73.js';
import './state-53e380b5.js';

const initSvelteKitClientRuntime = async ({ fetch, language, referenceLanguage, languages, cache: cache2 = {} }) => {
  const runtime = initRuntimeWithLanguageInformation({
    readResource: async (language2) => cache2[language2] ?? (cache2[language2] = await fetch(`${base}/inlang/${language2}.json`).then((response) => response.ok ? response.json() : void 0)),
    referenceLanguage,
    languages
  });
  if (language) {
    await runtime.loadResource(language);
    runtime.switchLanguage(language);
  }
  return runtime;
};
const cache = {};
const initRuntimeForWrappers = async (event, options) => {
  const existingPromise = getRuntimePromiseFromEvent(event);
  if (existingPromise)
    return existingPromise;
  if (!options) {
    await wait(0);
    return initRuntimeForWrappers(event, options);
  }
  let resolveRuntimePromise = void 0;
  addRuntimePromiseToEvent(event, new Promise((resolve) => resolveRuntimePromise = resolve));
  const runtime = await initRuntime(event, options, event.data["[inlang]"]);
  resolveRuntimePromise(runtime);
  return runtime;
};
const initRuntime = async (event, options, data) => {
  if (!data) {
    const useWarn = (defaultValue) => () => console.warn("inlang was not correctly set up on this page. Please check `routing.exclude` in your `inlang.config.js` file.") || defaultValue;
    return {
      i: useWarn(""),
      loadResource: useWarn(),
      switchLanguage: useWarn(),
      languages: []
    };
  }
  const { referenceLanguage, languages, language: lang } = data;
  const language = lang || !options.initDetectors ? lang : await detectLanguage({ referenceLanguage, languages }, ...options.initDetectors(event));
  return initSvelteKitClientRuntime({
    fetch: event.fetch,
    language,
    referenceLanguage,
    languages,
    cache
  });
};
const initRootLayoutLoadWrapper = (options) => ({
  use: (load2) => async (event) => {
    const runtime = await initRuntimeForWrappers(event, options);
    const payload = await load2(event, runtime);
    const { "[inlang]": _, ...data } = payload || event.data;
    return addRuntimeToData(data, runtime);
  }
});
const load$1 = initRootLayoutLoadWrapper({
  initDetectors: void 0
}).use(() => {
});

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = initRootLayoutServerLoadWrapper().use(() => {
});

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-b2ee7710.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.9e97f17b.js","_app/immutable/chunks/singletons.03378d0c.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/context.872a4bfa.js","_app/immutable/chunks/index.99c81ec3.js","_app/immutable/chunks/Toasts.svelte_svelte_type_style_lang.b99f9af5.js","_app/immutable/chunks/each.746c78c9.js","_app/immutable/chunks/spread.8a54911c.js"];
const stylesheets = ["_app/immutable/assets/0.d6b12dd7.css","_app/immutable/assets/Toasts.3c94672f.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-d5d00cbc.js.map

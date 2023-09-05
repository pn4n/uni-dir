import { g as getRuntimeFromLocals, i as initState, a as addRuntimeToLocals, b as getResource } from './state-53e380b5.js';

const createInlangFunction = (resource) => (key, args) => {
  const message = resource.body.find((message2) => message2.id.name === key);
  if (!message)
    return "";
  return message.pattern.elements.map((element) => serializeElement(element, args || {})).join("");
};
const serializeElement = (element, args) => {
  switch (element.type) {
    case "Text":
      return element.value;
    case "Placeholder": {
      return serializePlaceholder(element, args);
    }
  }
};
const serializePlaceholder = (placeholder, args) => {
  switch (placeholder.body.type) {
    case "VariableReference":
      return args[placeholder.body.name] ?? "";
  }
};
const isAsync = (p) => !!p && typeof p === "object" && typeof p.then === "function";
const fallbackInlangFunction = () => "";
const initBaseRuntime = ({ readResource }, state = {
  resources: /* @__PURE__ */ new Map(),
  language: void 0,
  i: void 0
}) => {
  const loadResourcePromises = /* @__PURE__ */ new Map();
  let isLoadResourceFunctionAsync = false;
  const loadResource = (language) => {
    if (state.resources.has(language))
      return isLoadResourceFunctionAsync ? Promise.resolve() : void 0;
    if (loadResourcePromises.has(language))
      return loadResourcePromises.get(language);
    const setResource = (resource) => resource && state.resources.set(language, resource);
    const resourceMaybePromise = readResource(language);
    if (!isAsync(resourceMaybePromise)) {
      setResource(resourceMaybePromise);
      return void 0;
    }
    isLoadResourceFunctionAsync = true;
    const promise = new Promise(async (resolve) => {
      const resource = await resourceMaybePromise;
      setResource(resource);
      loadResourcePromises.delete(language);
      resolve();
    });
    loadResourcePromises.set(language, promise);
    return promise;
  };
  const switchLanguage = (language) => {
    state.language = language;
    state.i = void 0;
  };
  const getLanguage = () => state.language;
  const getInlangFunction = () => {
    if (state.i)
      return state.i;
    const resource = state.resources.get(state.language);
    if (!resource)
      return fallbackInlangFunction;
    return state.i = createInlangFunction(resource);
  };
  return {
    loadResource,
    switchLanguage,
    get language() {
      return getLanguage();
    },
    get i() {
      return getInlangFunction();
    }
  };
};
const initRuntimeWithLanguageInformation = (context) => {
  const runtime = initBaseRuntime(context);
  return {
    ...runtime,
    get language() {
      return runtime.language;
    },
    get i() {
      return runtime.i;
    },
    get referenceLanguage() {
      return context.referenceLanguage;
    },
    get languages() {
      return context.languages;
    }
  };
};
const matchLanguage = (detectedLanguages, languages, allowRelated = true) => {
  for (const detectedLanguage of detectedLanguages) {
    for (const language of languages) {
      if (language === detectedLanguage)
        return language;
    }
  }
  for (const detectedLanguage of detectedLanguages) {
    if (allowRelated) {
      const relatedLanguages = languages.map((language) => (language.startsWith(detectedLanguage + "-") || detectedLanguage.startsWith(language + "-")) && language).filter(Boolean).sort().sort((a, b) => a.split("-").length - b.split("-").length);
      if (relatedLanguages.length)
        return relatedLanguages[0];
    }
  }
  return void 0;
};
const detectLanguage = async ({ referenceLanguage, languages, allowRelated = true }, ...detectors) => {
  const allDetectedLanguages = [];
  for (const detector of detectors) {
    const detectedLanguages = await detector();
    const matchedLanguage = matchLanguage(detectedLanguages, languages, false);
    if (matchedLanguage)
      return matchedLanguage;
    allDetectedLanguages.push(...detectedLanguages);
  }
  return allowRelated && matchLanguage(allDetectedLanguages, languages) || referenceLanguage;
};

const initSvelteKitServerRuntime = ({ language, referenceLanguage, languages }) => {
  const runtime = initRuntimeWithLanguageInformation({
    readResource: (language2) => getResource(language2),
    referenceLanguage,
    languages
  });
  if (language) {
    runtime.loadResource(language);
    runtime.switchLanguage(language);
  }
  return runtime;
};
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle = handlers[i];
      return handle({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const initHandleWrapper = (options) => ({
  use: (handle) => {
    let runtime;
    const excludedRoutes = [
      "/inlang",
      "/[fallback]",
      ...options.excludedRoutes || []
      // user defined excluded routes
    ];
    return sequence(async ({ event, resolve }) => {
      const pathname = event.url.pathname;
      runtime = getRuntimeFromLocals(event.locals);
      if (runtime) {
        return resolve(event);
      }
      if (excludedRoutes.some((route) => pathname.startsWith(route))) {
        return resolve(event);
      }
      const { referenceLanguage, languages } = await initState(await options.inlangConfigModule);
      let language = options.getLanguage(event);
      if (!language || !languages.includes(language)) {
        if (options.redirect) {
          const detectedLanguage = await detectLanguage({ referenceLanguage, languages }, ...options.initDetectors ? options.initDetectors(event) : []);
          throw options.redirect.throwable(307, options.redirect.getPath(event, detectedLanguage).toString());
        }
        language = void 0;
      }
      runtime = initSvelteKitServerRuntime({
        referenceLanguage,
        languages,
        language
      });
      addRuntimeToLocals(event.locals, runtime);
      return resolve(event, {
        transformPageChunk: language ? async ({ html }) => html.replace("<html", `<html lang="${language}"`) : void 0
      });
    }, (input) => handle(input, runtime));
  }
});
const initRootLayoutServerLoadWrapper = () => ({
  use: (load) => async (event) => {
    const runtime = getRuntimeFromLocals(event.locals);
    event.params.lang;
    return {
      ...await load(event, runtime),
      ...runtime ? {
        "[inlang]": {
          referenceLanguage: runtime.referenceLanguage,
          languages: runtime.languages,
          language: runtime.language
          // TODO: only pass this if `language` gets detected on server
        }
      } : void 0
    };
  }
});

export { initRuntimeWithLanguageInformation as a, initRootLayoutServerLoadWrapper as b, detectLanguage as d, initHandleWrapper as i };
//# sourceMappingURL=wrappers-740e98a0.js.map

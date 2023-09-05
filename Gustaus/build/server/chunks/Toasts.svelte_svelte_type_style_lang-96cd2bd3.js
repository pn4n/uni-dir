import { i as inlangSymbol } from './utils-fdb1ab73.js';
import { w as writable } from './index2-5001341d.js';
import { g as get_store_value } from './utils2-05c95967.js';

const getRuntimeFromGlobalThis = () => {
  return globalThis[inlangSymbol];
};
const addRuntimeToGlobalThis = (context) => globalThis[inlangSymbol] = context;
let id = 1;
const ID = () => id++;
const DEFAULT_OPTIONS = {
  closable: false,
  duration: 5e3,
  infinite: false,
  rich: false
};
const DEFAULT_ANIMATION = {
  start: 0.75,
  opacity: 0,
  duration: 150
};
const parseDuration = (value) => {
  if (typeof value === "number")
    return value;
  if (!/ms|s$/.test(value))
    throw new Error("[SVoast] `duration` prop was given a string but not a leading identifier (ms/s).");
  const duration = parseFloat(value.split(/ms|s/)[0]);
  if (/(?=ms)(?!s)/.test(value))
    return duration;
  return duration * 1e3;
};
const objectMerge = (original, newObject) => {
  return {
    ...original,
    ...newObject
  };
};
const TOASTS = writable([]);
const addToast = (type, message, { opts, id: id2 }) => {
  const UUID = id2 || ID();
  const customProps = opts?.component?.[1] || {};
  const { closable, component, infinite, rich, onMount, onRemove, duration } = objectMerge(DEFAULT_OPTIONS, opts);
  const DURATION = parseDuration(duration);
  const props = {
    id: UUID,
    type,
    message,
    duration: DURATION,
    closable,
    component,
    infinite,
    rich,
    ...customProps
  };
  if (typeof window !== "undefined")
    onMount?.();
  upsert(props, UUID);
  if (!infinite && type !== "promise") {
    setTimeout(() => {
      removeById(UUID);
      onRemove?.();
    }, DURATION);
  }
  return UUID;
};
const upsert = (props, id2) => {
  if (get_store_value(TOASTS).find((toast2) => toast2.id === id2)) {
    TOASTS.update((toasts) => {
      return toasts.map((toast2) => {
        if (toast2.id === id2)
          return { ...toast2, ...props };
        return toast2;
      });
    });
  } else {
    TOASTS.update((toasts) => toasts = get_store_value(position).includes("bottom") ? [...toasts, props] : [props, ...toasts]);
  }
};
const removeById = (id2) => {
  if (get_store_value(TOASTS).find((el) => el.id === id2))
    TOASTS.update((toasts) => toasts.filter((toast2) => toast2.id !== id2));
};
const removeByIndex = (index) => {
  if (get_store_value(TOASTS)[index])
    TOASTS.update((toasts) => toasts.filter((_, i) => index !== i));
};
const removeAll = () => {
  TOASTS.set([]);
};
const info = (message, opts = DEFAULT_OPTIONS) => addToast("info", message, { opts });
const attention = (message, opts = DEFAULT_OPTIONS) => addToast("attention", message, { opts });
const success = (message, opts = DEFAULT_OPTIONS) => addToast("success", message, { opts });
const warning = (message, opts = DEFAULT_OPTIONS) => addToast("warning", message, { opts });
const error = (message, opts = DEFAULT_OPTIONS) => addToast("error", message, { opts });
const promise = (promise2, opts) => {
  if (promise2 instanceof Promise === false)
    throw Error("`promise` is not a valid Promise.");
  const id2 = addToast("promise", opts.loading, { opts });
  opts?.onStart?.();
  promise2.then((data) => {
    addToast("success", opts.success, { opts, id: id2 });
    opts?.onSuccess?.(data);
  }).catch((err) => {
    addToast("error", opts.error, { opts, id: id2 });
    opts?.onError?.(err);
  }).finally(() => {
    if (!opts?.infinite) {
      setTimeout(() => {
        removeById(id2);
      }, parseDuration(opts.duration || DEFAULT_OPTIONS.duration));
    }
    opts?.onFinish?.();
  });
};
const createStore = () => {
  const { subscribe } = TOASTS;
  return {
    /**
     * Add a info type toast.\
     * Usually indicates information to the user, but isn’t important.
     * @param message The message to be displayed in the toast.
     * @param opts Options for the toast.
     */
    info,
    /**
     * Add an attention type toast.\
     * Indicate to the user with important information.
     * @param message The message to be displayed in the toast.
     * @param opts Options for the toast.
     */
    attention,
    /**
     * Add a success type toast.\
     * Indicates to the user something good has happened.
     * @param message The message to be displayed in the toast.
     * @param opts Options for the toast.
     */
    success,
    /**
     * Add a warning type toast.\
     * Tell the user something may be wrong but isn’t critical.
     * @param message The message to be displayed in the toast.
     * @param opts Options for the toast.
     */
    warning,
    /**
     * Add an error type toast.\
     * Alert the user something critical has happened.
     * @param message The message to be displayed in the toast.
     * @param opts Options for the toast.
     */
    error,
    /**
     * Add a promise toast chain.\
     * Indicates to the user that something is happening in the background.
     * @param promise The promise to be used.
     * @param opts Options for the promise chain.
     */
    promise,
    /**
     * Remove a toast based on the unique ID.
     * @param id The unique ID of the toast.
     */
    removeById,
    /**
     * Remove a toast based on the index.
     * @param index The index of the toast
     */
    removeByIndex,
    /**
     * Removes all toasts.
     */
    removeAll,
    subscribe
  };
};
const toast = createStore();
const position = writable("bottom-left");

export { DEFAULT_ANIMATION as D, addRuntimeToGlobalThis as a, getRuntimeFromGlobalThis as g, objectMerge as o, position as p, toast as t };
//# sourceMappingURL=Toasts.svelte_svelte_type_style_lang-96cd2bd3.js.map

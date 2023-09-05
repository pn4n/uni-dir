import { t as toast, g as getRuntimeFromGlobalThis } from './Toasts.svelte_svelte_type_style_lang-96cd2bd3.js';

const show_notif = (status) => {
  switch (status) {
    case "complete":
      toast.removeAll();
      toast.success(getRuntimeFromGlobalThis().i("toast.success"));
      break;
    case "loading":
      toast.info(getRuntimeFromGlobalThis().i("toast.loading"));
      break;
    case "failes":
      toast.removeAll();
      toast.error(getRuntimeFromGlobalThis().i("toast.error"));
      break;
  }
};
function categorizeItems(categories, items) {
  return categories.map((category) => {
    const categoryItems = category.items.map((itemId) => {
      return items.find((item) => item.id === itemId);
    });
    return { ...category, items: categoryItems };
  });
}
function getTitle(collection, lang) {
  return collection.translations.find((t) => t.languages_code.startsWith(lang)).title;
}
function ISOtoLocal(isoTime) {
  const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date(isoTime);
  const shiftedDate = new Date(date.toLocaleString("en-US", { timeZone: clientTimezone }));
  const formattedTime = shiftedDate.toLocaleString("ru-RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  return formattedTime;
}
function split_text(text) {
  return text.split("\n\n").map((element) => {
    return element.replace(/\n/g, "<br>");
  });
}

export { ISOtoLocal as I, show_notif as a, categorizeItems as c, getTitle as g, split_text as s };
//# sourceMappingURL=utils3-c01caed0.js.map

function categorizeItems(categories, items) {
  return categories.map((category) => {
    const categoryItems = category.items.map((itemId) => {
      return items.find((item) => item.id === itemId);
    });
    return { ...category, items: categoryItems };
  });
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

export { ISOtoLocal as I, categorizeItems as c };
//# sourceMappingURL=utils-1b30cef5.js.map

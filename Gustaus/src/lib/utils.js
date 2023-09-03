// merging categories with items

export function categorizeItems(categories, items) {
    return categories.map(category => {
      const categoryItems = category.items.map(itemId => {
        return items.find(item => item.id === itemId);
      });
  
      return { ...category, items: categoryItems };
    });
  }
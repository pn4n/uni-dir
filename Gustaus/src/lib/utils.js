import { toast } from "svoast";
import { i } from '@inlang/sdk-js'

export const show_notif = (status) => {
    switch (status) {
      
      case "complete":
        toast.removeAll();
        toast.success( i('toast.success') );
        break;

      case "loading":
        toast.info( i('toast.loading') );
        break;

      case "failes":
        toast.removeAll();
        toast.error( i('toast.error') );
        break;
  }};

// merging categories with items
export function categorizeItems(categories, items) {
    return categories.map(category => {
      const categoryItems = category.items.map(itemId => {
        return items.find(item => item.id === itemId);
      });
  
      return { ...category, items: categoryItems };
    });
  }
  
//get title translation from directus api
export function getTitle(collection, lang) {
    return collection.translations.find(t => t.languages_code.startsWith(lang)).title;
}

export function ISOtoLocal(isoTime) {
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

/* split text into paragraphs and replace \n with <br>
*
*   usage example:

*   {#each split_text(text) as paragraph} 
*      <p>{@html paragraph}</p>
*   { /each}
*/
export function split_text(text) {
    return text.split("\n\n").map((element) => {
        return element.replace(/\n/g, "<br>");
    });

}
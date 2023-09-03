import { readItems, createItem } from "@directus/sdk/rest";
import "../../../chunks/index.js";
import { g as getDirectusClient } from "../../../chunks/dir-client.js";
async function load() {
  return {
    streamed: {
      reviews: new Promise(async (resolve) => {
        const dir = getDirectusClient();
        const reviews = await dir.request(readItems("reviews", {
          sort: "-date_created"
          //Sort by creation date descending
        }));
        resolve(reviews);
      })
    }
  };
}
const actions = {
  default: async ({ request }) => {
    const dir = getDirectusClient();
    const data = await request.formData();
    const item_object = {
      name: data.get("name"),
      text: data.get("text"),
      rating: data.get("rating")
    };
    try {
      await dir.request(createItem("reviews", item_object));
      return { success: true };
    } catch {
      return { success: false };
    }
  }
};
export {
  actions,
  load
};

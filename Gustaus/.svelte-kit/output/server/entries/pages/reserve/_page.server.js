import { createItem } from "@directus/sdk/rest";
import { g as getDirectusClient } from "../../../chunks/dir-client.js";
const actions = {
  default: async ({ request }) => {
    const dir = getDirectusClient();
    const data = await request.formData();
    const item_object = {
      user_info: "Email: " + data.get("email") + ", Телефон: " + data.get("phone") + ", Комментарий: " + data.get("comment"),
      request_info: "Дата: " + data.get("date") + ",Время: " + data.get("time") + ", Кол-во человек: " + data.get("people")
    };
    try {
      await dir.request(createItem("requests", item_object));
      return { success: true };
    } catch {
      return { success: false };
    }
  }
  // register: async (event) => {
  // 	// TODO register the user
  // }
};
export {
  actions
};

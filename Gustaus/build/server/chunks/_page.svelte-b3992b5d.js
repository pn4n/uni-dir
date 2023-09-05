import { c as create_ssr_component, b as escape } from './ssr-58f9b3e9.js';
import { g as getRuntimeFromContext } from './context-b6dcdab0.js';
import { a as show_notif } from './utils3-c01caed0.js';
import './utils2-05c95967.js';
import './utils-fdb1ab73.js';
import './Toasts.svelte_svelte_type_style_lang-96cd2bd3.js';
import './index2-5001341d.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i } = getRuntimeFromContext();
  let form_status;
  {
    show_notif(form_status);
  }
  return `<h1>${escape(i("reserve.header"))}</h1> <form method="POST"><label for="firstname">${escape(i("form.name"))} <input type="text" id="name" name="name" required></label> <div class="grid"><label for="email">${escape(i("form.email"))} <input type="email" id="email" name="email"></label> <label for="phone">${escape(i("form.phone"))} <input type="phone" id="phone" name="phone" required></label></div> <div class="grid"><label for="date">${escape(i("reserve.date"))} <input type="date" id="date" name="date" required></label> <label for="time">${escape(i("reserve.time"))} <input type="time" id="time" name="time"></label> <label for="people">${escape(i("reserve.people"))} <input type="number" min="0" id="people" name="people" required></label></div> <label for="comment">${escape(i("form.comment"))} <input type="text" id="comment" name="comment"></label> <button class="outline" ${""}>${escape(i("form.submit"))}</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b3992b5d.js.map

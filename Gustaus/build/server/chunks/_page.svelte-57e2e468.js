import { c as create_ssr_component } from './ssr-29c0f19e.js';
import { t as toast } from './Toasts.svelte_svelte_type_style_lang-142eab8d.js';
import './index2-2cc97b45.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form_status;
  const show_notif = (status) => {
    switch (status) {
      case "complete":
        toast.removeAll();
        toast.success("Заявка принята");
        break;
      case "loading":
        toast.info("Загрузка...");
        break;
      case "failes":
        toast.removeAll();
        toast.error("Ошибка! Заявка не отправлена");
        break;
    }
  };
  {
    show_notif(form_status);
  }
  return `<h1 data-svelte-h="svelte-1vpxis2">Резервация</h1> <form method="POST"><label for="firstname" data-svelte-h="svelte-1msrhbx">ФИО
        <input type="text" id="name" name="name" required></label> <div class="grid" data-svelte-h="svelte-1xh6r5c"><label for="email">Email
        <input type="email" id="email" name="email"></label> <label for="phone">Телефон
        <input type="phone" id="phone" name="phone" required></label></div> <div class="grid" data-svelte-h="svelte-1g6i65i"><label for="date">Дата
        <input type="date" id="date" name="date" required></label> <label for="time">Время
        <input type="time" id="time" name="time"></label> <label for="people">Кол-во человек
        <input type="number" min="0" id="people" name="people" required></label></div> <label for="comment" data-svelte-h="svelte-1gv9dgb">Комментарий
      <input type="text" id="comment" name="comment"></label> <button class="outline" ${""}>Подтвердить заказ</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-57e2e468.js.map

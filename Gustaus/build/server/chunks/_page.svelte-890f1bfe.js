import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, d as escape, e as each, b as add_attribute } from './ssr-29c0f19e.js';
import { t as toast } from './Toasts.svelte_svelte_type_style_lang-142eab8d.js';
import { L as LoadingDirectus } from './LoadingDirectus-d4eb53ab.js';
import { I as ISOtoLocal } from './utils-1b30cef5.js';
import './index2-2cc97b45.js';

const star = "/_app/immutable/assets/star.21d82e96.svg";
const star_fill = "/_app/immutable/assets/star-fill.d14fae3f.svg";
const css$2 = {
  code: ".grid.svelte-zrjrbu{display:flex}img.svelte-zrjrbu{filter:invert()}",
  map: null
};
const StarRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rating } = $$props;
  let star_list = [];
  for (let i = 1; i <= 5; i++) {
    star_list.push(rating > i - 1 ? star_fill : star);
  }
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  $$result.css.add(css$2);
  return `<div class="grid svelte-zrjrbu"><span data-svelte-h="svelte-3pmdvc">Оценка:</span> ${each(star_list, (file_name) => {
    return `<span><img${add_attribute("src", file_name, 0)} alt="rating star" class="svelte-zrjrbu"> </span>`;
  })} </div>`;
});
const css$1 = {
  code: ".grid.svelte-ygqp6f{display:flex;justify-content:space-between}",
  map: null
};
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name, date_created, rating, text, id } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date_created === void 0 && $$bindings.date_created && date_created !== void 0)
    $$bindings.date_created(date_created);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<article><header><div class="grid svelte-ygqp6f"><p>${escape(name)}</p> <p>${escape(ISOtoLocal(date_created))}</p></div></header> <p>${escape(text ? text : "Без комментария")}</p> <footer>${validate_component(StarRating, "StarRating").$$render($$result, { rating }, {}, {})}</footer> </article>`;
});
const css = {
  code: "textarea.svelte-102g8xp{resize:none;height:80%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let form_status;
  const show_notif = (status) => {
    switch (status) {
      case "complete":
        toast.removeAll();
        toast.success("отзыв отправлен");
        break;
      case "loading":
        toast.info("Загрузка...");
        break;
      case "failes":
        toast.removeAll();
        toast.error("Ошибка! Отзыв не отправлен");
        break;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    show_notif(form_status);
  }
  return `<h1 data-svelte-h="svelte-1v6inij">Оставить отзыв</h1> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(LoadingDirectus, "LoadingDirectus").$$render($$result, {}, {}, {})} `;
    }
    return function(reviews) {
      return ` <form method="POST"><label for="firstname" data-svelte-h="svelte-e1j8ya">Имя
      <input type="text" id="name" name="name" required></label> <div class="grid" data-svelte-h="svelte-1xwtmwq"><label for="text">Комментарий
        <textarea type="text" id="text" name="text" class="svelte-102g8xp"></textarea></label> <fieldset name="rating"><legend>Оценка</legend> <label><input type="radio" name="rating" value="5" checked>
          Отлично</label> <label for="medium"><input type="radio" name="rating" value="4">
          Хорошо</label> <label for="large"><input type="radio" name="rating" value="3">
          Нормально</label> <label for="large"><input type="radio" name="rating" value="2">
          Плохо</label> <label for="large"><input type="radio" name="rating" value="1">
          Ужасно</label></fieldset></div> <button class="outline" ${""}>Отправить отзыв</button></form> <h1>${escape(reviews.length > 0 ? "Последние отзывы" : "Нет отзывов")}</h1> ${each(reviews, (rev) => {
        return `${validate_component(Review, "Review").$$render($$result, Object.assign({}, rev), {}, {})}`;
      })} `;
    }(__value);
  }(data.streamed.reviews)}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-890f1bfe.js.map

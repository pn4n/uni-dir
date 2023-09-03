import { c as create_ssr_component, b as add_attribute, v as validate_component, i as is_promise, n as noop, e as each, d as escape } from './ssr-29c0f19e.js';
import { t as toast } from './Toasts.svelte_svelte_type_style_lang-142eab8d.js';
import { L as LoadingDirectus } from './LoadingDirectus-d4eb53ab.js';
import './index2-2cc97b45.js';

const css$2 = {
  code: "article.svelte-2qu7md{position:fixed;bottom:0;left:5rem;right:5rem;padding:10px;height:min-content;text-align:center;margin:10px auto}button.svelte-2qu7md{margin-bottom:0px;border-left:none;border-right:none}",
  map: null
};
const MenuFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sum = 0 } = $$props;
  let { dialog } = $$props;
  if ($$props.sum === void 0 && $$bindings.sum && sum !== void 0)
    $$bindings.sum(sum);
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  $$result.css.add(css$2);
  return `<article class="grid svelte-2qu7md"><button class="outline contrast svelte-2qu7md" type="button">К оформлению (сумма: ${escape(sum)} руб)</button> </article>`;
});
const OrderForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let json_order;
  let total;
  let { cart_list } = $$props;
  let { form_status } = $$props;
  let form;
  if ($$props.cart_list === void 0 && $$bindings.cart_list && cart_list !== void 0)
    $$bindings.cart_list(cart_list);
  if ($$props.form_status === void 0 && $$bindings.form_status && form_status !== void 0)
    $$bindings.form_status(form_status);
  json_order = JSON.stringify(cart_list);
  form_status = form?.success;
  total = Object.values(cart_list).reduce((total2, curr) => total2 + curr.price * curr.counter, 0);
  return `<table><thead data-svelte-h="svelte-7j0l9b"><tr><th scope="col">#</th> <th scope="col">Наименование</th> <th scope="col">Цена</th> <th scope="col">Стоимость</th></tr></thead> <tbody>${each(Object.values(cart_list), (item, i) => {
    return `<tr><th scope="row">${escape(item.counter)}</th> <td>${escape(item.title)}</td> <td>${escape(item.price)}</td> <td>${escape(item.price * item.counter)}</td> </tr>`;
  })}</tbody> <tfoot><tr><th scope="col" data-svelte-h="svelte-u3m1v0">Всего</th> <td></td> <td></td> <td>${escape(total)}</td></tr></tfoot></table> <form method="POST"${add_attribute("this", form, 0)}> <input type="text" id="order" name="order" hidden${add_attribute("value", json_order, 0)}> <label for="name" data-svelte-h="svelte-p0tin1">ФИО
        <input type="text" id="name" name="name" required></label> <div class="grid" data-svelte-h="svelte-1xh6r5c"><label for="email">Email
        <input type="email" id="email" name="email"></label> <label for="phone">Телефон
        <input type="phone" id="phone" name="phone" required></label></div> <label for="address" data-svelte-h="svelte-1fe0439">Адрес
      <input type="text" id="address" name="address"></label> <label for="comment" data-svelte-h="svelte-1gv9dgb">Комментарий
      <input type="text" id="comment" name="comment"></label> <button class="outline" data-svelte-h="svelte-1i6gog9">Подтвердить заказ</button></form>`;
});
const css$1 = {
  code: "img.svelte-1wj7nso{width:100%;height:100%;object-fit:cover}div.svelte-1wj7nso::before{position:relative;top:45%}div.svelte-1wj7nso{width:100%;height:100%;margin:auto}",
  map: null
};
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let imgLoading = true;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$1);
  return `<div${add_attribute("aria-busy", imgLoading, 0)} class="svelte-1wj7nso"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="svelte-1wj7nso"> </div>`;
});
const css = {
  code: 'dialog.svelte-q5gu5o{overflow-y:hidden}article.svelte-q5gu5o:not(.default){text-align:center;height:500px;width:500px;position:relative;background-size:cover}footer.svelte-q5gu5o{display:flex;justify-content:space-around;position:absolute;bottom:0;margin:0;width:100%}p.svelte-q5gu5o{margin:auto 0;width:300px}.grid.svelte-q5gu5o{height:70px;width:80%}header.svelte-q5gu5o:not(.default){padding:auto 0;position:absolute;top:0;margin:0;width:100%}button.svelte-q5gu5o,input.svelte-q5gu5o{min-width:min-content;max-height:fit-content}input.svelte-q5gu5o::-webkit-outer-spin-button,input.svelte-q5gu5o::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"].svelte-q5gu5o{-moz-appearance:textfield}.grid-container.svelte-q5gu5o{--grid-layout-gap:10px;--grid-column-count:2;--grid-item--min-width:500px;--gap-count:calc(var(--grid-column-count) - 1);--total-gap-width:calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width:calc(\n            (100% - var(--total-gap-width)) / var(--grid-column-count)\n        );display:grid;grid-template-columns:repeat(\n            auto-fill,\n            minmax(\n                max(var(--grid-item--min-width), var(--grid-item--max-width)),\n                1fr\n            )\n        );grid-gap:var(--grid-layout-gap)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sum;
  let { data } = $$props;
  let dialog;
  let cart_list = {};
  let form_status;
  const show_notif = (status) => {
    if (status == "complete") {
      toast.removeAll();
      toast.success("Заявка принята");
    }
    if (status == "loading") {
      cart_list = {};
      sum = 0;
      dialog.close();
      toast.info("Загрузка...");
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    sum = Object.values(cart_list).reduce((total, curr) => total + curr.price * curr.counter, 0);
    {
      show_notif(form_status);
    }
    $$rendered = `<dialog class="svelte-q5gu5o"${add_attribute("this", dialog, 0)}><article ${sum < 1 ? "hidden" : ""} class="default svelte-q5gu5o"><header class="default svelte-q5gu5o"><a href="#close" aria-label="Close" class="close"></a>
            Подверждение заказа</header> ${validate_component(OrderForm, "OrderForm").$$render(
      $$result,
      { cart_list, form_status },
      {
        cart_list: ($$value) => {
          cart_list = $$value;
          $$settled = false;
        },
        form_status: ($$value) => {
          form_status = $$value;
          $$settled = false;
        }
      },
      {}
    )}</article></dialog> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${validate_component(LoadingDirectus, "LoadingDirectus").$$render($$result, {}, {}, {})} `;
      }
      return function(dir) {
        return ` ${each(dir.menu_items, (category) => {
          return `<h1>${escape(category.title)}</h1> <div class="grid-container svelte-q5gu5o">${each(category.items, (item) => {
            return `<article class="container svelte-q5gu5o"><header class="svelte-q5gu5o">${escape(item.title)}</header> ${validate_component(LazyImage, "LazyImage").$$render(
              $$result,
              {
                src: dir.url + "/assets/" + item.img,
                alt: "menu item"
              },
              {},
              {}
            )} <footer class="svelte-q5gu5o"><p class="svelte-q5gu5o">${escape(item.price)} руб</p> <div class="grid svelte-q5gu5o">${cart_list.hasOwnProperty(item.id) ? `<button class="outline svelte-q5gu5o" data-svelte-h="svelte-1r7hn3j">+</button> <input type="number" class="svelte-q5gu5o"${add_attribute("value", cart_list[item.id]["counter"], 0)}> <button class="outline svelte-q5gu5o" data-svelte-h="svelte-gt5vgd">-</button>` : `<button class="outline svelte-q5gu5o" data-svelte-h="svelte-15vfxh8">Добавить</button>`} </div></footer> </article>`;
          })}</div> <hr>`;
        })} <div ${sum < 1 ? "hidden" : ""}>${validate_component(MenuFooter, "MenuFooter").$$render(
          $$result,
          { sum, dialog },
          {
            sum: ($$value) => {
              sum = $$value;
              $$settled = false;
            },
            dialog: ($$value) => {
              dialog = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> `;
      }(__value);
    }(data.streamed.dir)}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f19d7f98.js.map

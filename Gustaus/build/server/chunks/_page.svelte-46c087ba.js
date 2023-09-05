import { i as is_promise, n as noop } from './utils2-05c95967.js';
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each } from './ssr-58f9b3e9.js';
import { g as getRuntimeFromContext } from './context-b6dcdab0.js';
import { a as show_notif, g as getTitle } from './utils3-c01caed0.js';
import { L as LoadingDirectus } from './LoadingDirectus-f71924a9.js';
import './utils-fdb1ab73.js';
import './Toasts.svelte_svelte_type_style_lang-96cd2bd3.js';
import './index2-5001341d.js';

const css$3 = {
  code: "p.svelte-13hn5ox{min-width:fit-content;margin:auto;font-weight:500}article.svelte-13hn5ox{position:fixed;bottom:0;left:5rem;right:5rem;padding:10px;height:min-content;text-align:center;margin:10px auto}.sum-div.svelte-13hn5ox{display:flex}button.svelte-13hn5ox{margin-bottom:0px;max-width:300px}.grid.svelte-13hn5ox{display:inline-flex;justify-content:space-around}",
  map: null
};
const MenuFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i } = getRuntimeFromContext();
  let { sum = 0 } = $$props;
  let { dialog } = $$props;
  if ($$props.sum === void 0 && $$bindings.sum && sum !== void 0)
    $$bindings.sum(sum);
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  $$result.css.add(css$3);
  return `<article class="grid svelte-13hn5ox"><div class="sum-div svelte-13hn5ox"><p class="svelte-13hn5ox">${escape(i("menu.sum"))}</p> <p class="svelte-13hn5ox">${escape(sum)} ${escape(i("menu.currency"))}</p></div> <button class="outline contrast svelte-13hn5ox" type="button">${escape(i("menu.chechkout"))}</button> </article>`;
});
const OrderForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let json_order;
  let total;
  const { i } = getRuntimeFromContext();
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
  return `<table><thead><tr><th scope="col" data-svelte-h="svelte-j337pg">#</th> <th scope="col">${escape(i("menu.order.title"))}</th> <th scope="col">${escape(i("menu.order.price"))}</th> <th scope="col">${escape(i("menu.order.subtotal"))}</th></tr></thead> <tbody>${each(Object.entries(cart_list), ([key, item]) => {
    return `<tr><th scope="row">${escape(item.counter)}</th> <td>${escape(item.title)}</td> <td>${escape(item.price)}</td> <td>${escape(item.price * item.counter)}</td> </tr>`;
  })}</tbody> <tfoot><tr><th scope="col">${escape(i("menu.order.total"))}</th> <td></td> <td></td> <td>${escape(total)}</td></tr></tfoot></table> <form method="POST"${add_attribute("this", form, 0)}> <input type="text" id="order" name="order" hidden${add_attribute("value", json_order, 0)}> <label for="name">${escape(i("form.name"))} <input type="text" id="name" name="name" required></label> <div class="grid"><label for="email">${escape(i("form.email"))} <input type="email" id="email" name="email"></label> <label for="phone">${escape(i("form.phone"))} <input type="phone" id="phone" name="phone" required></label></div> <label for="address">${escape(i("form.address"))} <input type="text" id="address" name="address"></label> <label for="comment">${escape(i("form.comment"))} <input type="text" id="comment" name="comment"></label> <button class="outline">${escape(i("form.submit"))}</button></form>`;
});
const css$2 = {
  code: "img.svelte-123myd0{width:100%;height:100%;object-fit:cover}div.svelte-123myd0::before{position:relative;top:45%}div.svelte-123myd0{width:100%;height:100%;margin:auto}",
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
  $$result.css.add(css$2);
  return `<div${add_attribute("aria-busy", imgLoading, 0)} class="svelte-123myd0"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="svelte-123myd0"> </div>`;
});
const css$1 = {
  code: ':root{--transaparent-color:rgba(0, 0, 0, 0)}p.svelte-73uhtl{margin:auto 0;width:300px}article.svelte-73uhtl{text-align:center;aspect-ratio:9 / 12;max-width:500px;position:relative;background-size:cover}footer.svelte-73uhtl{display:flex;justify-content:space-around;position:absolute;bottom:0;margin:0;width:100%}header.svelte-73uhtl{padding:auto 0;position:absolute;top:0;margin:0;width:100%}.grid.svelte-73uhtl{height:70px;width:fit-content;display:flex;justify-content:space-between;column-gap:0px}button.svelte-73uhtl,input.svelte-73uhtl{max-height:fit-content;margin:auto 0;height:50px;display:inline-flex;align-items:center;justify-content:center}input.svelte-73uhtl::-webkit-outer-spin-button,input.svelte-73uhtl::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"].svelte-73uhtl{-moz-appearance:textfield}',
  map: null
};
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { i, language } = getRuntimeFromContext();
  let { item } = $$props;
  let { url } = $$props;
  let { cart_list } = $$props;
  let { items_list } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.cart_list === void 0 && $$bindings.cart_list && cart_list !== void 0)
    $$bindings.cart_list(cart_list);
  if ($$props.items_list === void 0 && $$bindings.items_list && items_list !== void 0)
    $$bindings.items_list(items_list);
  $$result.css.add(css$1);
  return `<article class="container svelte-73uhtl"><header class="svelte-73uhtl">${escape(getTitle(item, language))}</header> ${validate_component(LazyImage, "LazyImage").$$render(
    $$result,
    {
      src: url + "/assets/" + item.img,
      alt: "menu item"
    },
    {},
    {}
  )} <footer class="svelte-73uhtl"><p class="svelte-73uhtl">${escape(item.price)} ${escape(i("menu.currency"))}</p> <div class="grid svelte-73uhtl">${cart_list.hasOwnProperty(item.id) ? `<button class="outline svelte-73uhtl" data-svelte-h="svelte-10drvz">+</button> <input type="number" class="svelte-73uhtl"${add_attribute("value", cart_list[item.id]["counter"], 0)}> <button class="outline svelte-73uhtl" data-svelte-h="svelte-xvb3el">-</button>` : `<button class="outline svelte-73uhtl">${escape(i("menu.add"))}</button>`}</div></footer> </article>`;
});
const css = {
  code: "dialog.svelte-1dwxdgc{overflow-y:hidden}p.svelte-1dwxdgc{margin:auto 0;width:300px}.grid-container.svelte-1dwxdgc{--grid-layout-gap:10px;--grid-column-count:2;--grid-item--min-width:300px;--gap-count:calc(var(--grid-column-count) - 1);--total-gap-width:calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width:calc(\n            (100% - var(--total-gap-width)) / var(--grid-column-count)\n        );display:grid;grid-template-columns:repeat(\n            auto-fill,\n            minmax(\n                max(var(--grid-item--min-width), var(--grid-item--max-width)),\n                1fr\n            )\n        );grid-gap:var(--grid-layout-gap)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sum;
  const { i, language } = getRuntimeFromContext();
  let { data } = $$props;
  let dialog;
  let cart_list = {};
  let form_status;
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
    $$rendered = `<dialog class="svelte-1dwxdgc"${add_attribute("this", dialog, 0)}><article ${sum < 1 ? "hidden" : ""}><header><a href="#close" aria-label="Close" class="close"></a> ${escape(i("menu.chechkout"))}</header> ${validate_component(OrderForm, "OrderForm").$$render(
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
        return `  ${each(dir.menu_items, (category) => {
          return `<h1>${escape(getTitle(category, language))}</h1>  <div class="grid-container svelte-1dwxdgc">${each(category.items, (item) => {
            return `${validate_component(MenuItem, "MenuItem").$$render(
              $$result,
              {
                item,
                url: dir.url,
                items_list: dir.items,
                cart_list
              },
              {
                cart_list: ($$value) => {
                  cart_list = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
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
//# sourceMappingURL=_page.svelte-46c087ba.js.map

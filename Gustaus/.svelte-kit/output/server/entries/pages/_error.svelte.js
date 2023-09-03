import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="error" data-svelte-h="svelte-1uhpc26"><section><div class="container"><h1>Произошла ошибка!</h1> <p><a href="/">Вернуться на главную страницу</a></p></div></section></main>`;
});
export {
  Error as default
};

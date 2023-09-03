import { c as create_ssr_component } from "./ssr.js";
const LoadingDirectus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <article data-svelte-h="svelte-12ox1cg"><progress></progress> <p>Directus is loading, please wait...</p> </article>`;
});
export {
  LoadingDirectus as L
};

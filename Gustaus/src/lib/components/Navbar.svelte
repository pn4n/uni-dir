<script>
    import { page } from '$app/stores';  
	import { language } from "@inlang/sdk-js"
    import { switchLanguage } from "@inlang/sdk-js";
    

    let nav_items = [

        {'link': '/',
         'title': i('nav.home'),},
         
        {'link': '/menu',
         'title': i('nav.menu'),},

        {'link': '/reserve',
         'title': i('nav.reserve')},

        {'link': '/reviews',
         'title': i('nav.reviews'),},
    ]
</script>

<nav>
    <img src="/logo.png" alt="logo">
    {#each nav_items as route}
        <a href={route.link} aria-current="{$page.route.id === route.link}" >{route.title}</a>
    {/each}

    <button type="menu" hidden={language == 'en'} on:click={() => switchLanguage("en")}>
        <img src="/en.png" alt="english icon" draggable="false">
    </button>

    <button hidden={language == 'ru'} on:click={() => switchLanguage("ru")}>
        <img src="/ru.png" hidden={language == 'ru'} alt="russian icon" draggable="false">
    </button>   
</nav>

<style>
    /* TODO: burger menu on widths < 400px */
    nav {
        padding: 0.5rem 1rem;
        margin-bottom: 2rem ;
        border-bottom: 1px solid var(--primary);
        background-color: var(--form-element-focus-color);

    }

    a {
        display: flex;
        justify-content: space-evenly;
        padding: 0.5rem;
        height: min-content;
        margin: auto;
    }

    a[aria-current='true'] {
        color: var(--inverse);
        border-radius: 5px;
        border-left: 1px solid var(--primary);
        border-right: 1px solid var(--primary);
    }
    img {
        height: 50px;
        margin: auto 0;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
      margin: 0;
      width: fit-content;
    }

</style>
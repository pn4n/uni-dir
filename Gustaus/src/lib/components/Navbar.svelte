<script>
    import { page } from '$app/stores';  
    

    let nav_items = [

        {'link': '/',
         'title': 'Главная',},
         
        {'link': '/menu',
         'title': 'Меню',},

        {'link': '/reserve',
         'title': 'Резервация',},

        {'link': '/reviews',
         'title': 'Отзывы',},
    ]

</script>
<nav>
    <img src="/logo.png" alt="logo">
    {#each nav_items as route}
        <a href={route.link} aria-current="{$page.route.id === route.link}" >{route.title}</a>
    {/each}
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

</style>
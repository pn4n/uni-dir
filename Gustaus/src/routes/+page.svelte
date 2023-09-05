<script>
import { split_text } from '$lib/utils';

</script>


<div class="grid">
    <div>
        <h1>{i('home.header')}</h1>
        {#each split_text(i('home.text')) as paragraph}
            <p>{@html paragraph}</p>
        {/each}
    </div>

    <div>
        <img src="/main/hero.webp" alt="Hero" />
    </div>
</div>

<hr />
<div class="grid">
    <h1>
        {i("home.contacts.header")}
    </h1>

    <p class="info">
        {#each split_text(i('home.contacts.text')) as paragraph}
            {@html paragraph}
        {/each}
    </p>
</div>

<style>
    h1 {
        font-weight: 200;
    }

    p:not(.info) {
        text-indent: 30px;
    }
    img {
        margin: 0 auto;
    }
</style>

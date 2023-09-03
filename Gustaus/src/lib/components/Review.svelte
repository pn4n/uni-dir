<script>
    import { ISOtoLocal } from "$lib/utils";
    import StarRating from "$lib/components/StarRating.svelte";

    export let name, date_created, rating, text, id
</script>

<article>
    <header>
        <div class="grid">
            <p>{name}</p>
            <p>{ISOtoLocal(date_created)}</p>
        </div>
    </header>

    <p>{text ? text : "Без комментария"}</p>

    <footer><StarRating rating={rating} /></footer>
</article>

<style>
    .grid {
        display: flex;
        justify-content: space-between;
    }
</style>

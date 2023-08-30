<script>
    import star from '$lib/svg/star.svg'
    import star_fill from '$lib/svg/star-fill.svg'
    export let rating

    let star_list= []

    for (let i = 1; i <= 5; i++) {
        star_list.push( rating > i - 1 ? star_fill : star)
    }
</script>

<div class="grid">
    <span>
        Оценка:
    </span>
    {#each star_list as file_name}
    <span>
        <img src={file_name} alt="rating star" />
    </span>

    {/each}
</div>

<style>
    .grid{
        display: flex;
    }
    img {
        filter: invert();
    }
</style>
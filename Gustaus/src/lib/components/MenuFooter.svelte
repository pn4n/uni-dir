<script>
    export let sum = 0
    export let dialog

    const handle_click = () => {
        dialog.showModal()
    }
</script>

<article class="grid">
    <button class="outline contrast" type="button" on:click={handle_click}>
        К оформлению (сумма: {sum} руб)
    </button>
</article>

<style>
    article {
        position: fixed;
        bottom: 0;
        left: 5rem;
        right: 5rem;
        padding: 10px;
        height: min-content;
        text-align: center;
        margin: 10px auto;
    }
    button {
        margin-bottom: 0px;
        border-left: none;
        border-right: none;
    }
</style>
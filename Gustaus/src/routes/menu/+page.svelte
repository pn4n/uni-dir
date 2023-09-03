<script>
    import { toast } from "svoast";

    import MenuFooter from "$lib/components/MenuFooter.svelte";
    import OrderForm from "$lib/components/OrderForm.svelte";
    import LazyImage from "$lib/components/LazyImage.svelte";
    import LoadingDirectus from "../../lib/components/LoadingDirectus.svelte";

    export let data;

    let dialog;
    let cart_list = {};
    let form_status;

    $: sum = Object.values(cart_list).reduce(
        (total, curr) => total + curr.price * curr.counter,
        0
    );

    const add_item = (id) => {
        const it = data.streamed.dir.items.find((item) => item["id"] === id);

        cart_list[id] = { title: it.title, price: it.price, counter: 1 };
    };

    const handle_increse = (id) => {
        cart_list[id]["counter"]++;
    };

    const handle_decrese = (id) => {
        cart_list[id]["counter"]--;
        if (cart_list[id]["counter"] < 1) {
            delete cart_list[id];
        }
    };

    $: show_notif(form_status);
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

    const close_dialog = () => dialog.close();
</script>

<dialog bind:this={dialog}>
    <article hidden={sum < 1} class="default">
        <header class="default">
            <a
                href="#close"
                aria-label="Close"
                class="close"
                on:click={close_dialog}
            />
            Подверждение заказа
        </header>

        <OrderForm bind:cart_list bind:form_status />
    </article>
</dialog>

{#await data.streamed.dir}
    <LoadingDirectus />
{:then dir}
    {#each dir.menu_items as category}
        <h1>{category.title}</h1>

        <div class="grid-container">
            {#each category.items as item}
                <article class="container">
                    <header>{item.title}</header>

                    <LazyImage
                        src="{dir.url}/assets/{item.img}"
                        alt="menu item"
                    />

                    <footer>
                        <p>{item.price} руб</p>
                        <div class="grid">
                            {#if cart_list.hasOwnProperty(item.id)}
                                <button
                                    class="outline"
                                    on:click={() => handle_increse(item.id)}
                                    >+</button
                                >

                                <input
                                    type="number"
                                    bind:value={cart_list[item.id]["counter"]}
                                />

                                <button
                                    class="outline"
                                    on:click={() => handle_decrese(item.id)}
                                    >-</button
                                >
                            {:else}
                                <button
                                    class="outline"
                                    on:click={() => add_item(item.id)}
                                    >Добавить</button
                                >
                            {/if}
                        </div>
                    </footer>
                </article>
            {/each}
        </div>
        <hr />
    {/each}

    <div hidden={sum < 1}>
        <MenuFooter bind:sum bind:dialog />
    </div>
{:catch error}
    <p>Directus is not connected</p>
    <p>{error.message}</p>
{/await}

<style>
    dialog {
        overflow-y: hidden; /* Hide vertical scrollbar */
    }

    article:not(.default) {
        text-align: center;
        height: 500px;
        width: 500px;
        position: relative;
        background-size: cover;
    }
    footer {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        margin: 0;
        width: 100%;
    }
    p {
        margin: auto 0;
        width: 300px;
    }
    .grid {
        height: 70px;
        width: 80%;
    }
    header:not(.default) {
        padding: auto 0;
        position: absolute;
        top: 0;
        margin: 0;
        width: 100%;
    }
    button,
    input {
        min-width: min-content;
        max-height: fit-content;
    }

    /* remove  arrows */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

    .grid-container {
        /**
   * User input values.
   */
        --grid-layout-gap: 10px;
        --grid-column-count: 2; /* This gets overridden by an inline style. */
        --grid-item--min-width: 500px; /* This gets overridden by an inline style. */

        /**
   * Calculated values.
   */
        --gap-count: calc(var(--grid-column-count) - 1);
        --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
        --grid-item--max-width: calc(
            (100% - var(--total-gap-width)) / var(--grid-column-count)
        );

        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(
                max(var(--grid-item--min-width), var(--grid-item--max-width)),
                1fr
            )
        );
        grid-gap: var(--grid-layout-gap);
    }
</style>

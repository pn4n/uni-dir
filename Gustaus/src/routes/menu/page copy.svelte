<script>
    import MenuFooter from '../../lib/components/MenuFooter.svelte';
import Table from '../../lib/components/Table.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let counter = {}
    let dialog;

    const add_item = (id) => {
        counter[id] = 1
    }

    const handle_decrese = (id) => {
        counter[id]--
        if (counter[id] < 0) {
            delete counter.id
        }
    }

    const close = () => {
        dialog.close()
    }
    function counter_status() { return counter.length > 1 ? true : null }

    // let item_counters = data.items
    // data.items.forEach(element => {
    //     counter[element['id']] = 0
    // });
    // $: counter.length > 0 ? dialog.removeAttribute('open') : dialog.setAttribute('open', '');
    let sum = 0


    $: sum = Object.keys(counter).reduce((total, curr) => {
        console.log(total, data.items[curr])
        total + data.items[curr].price * counter[curr]
    }, 0)

    // $: sum = counter.reduce((total, itemId) => total + counter[itemId], 0);
    $: console.log(sum)
</script>

{#each data.menu_items as category}
<h1>{category.title}</h1>


    <div class="grid-container">

        {#each category.items as item}

        <article class="container"
            style=" background-image: url(http://0.0.0.0:8055/assets/{item.img})">

            <header> {item.title} </header>
           
            <footer> 
                <p>{item.price} руб</p>
                <div class="grid">

                    {#if counter[item.id] > 0}
                    
                        <button class="outline" 
                            on:click={() => counter[item.id] = counter[item.id] + 1}
                            >+</button>

                        <input type="number" bind:value={counter[item.id]}>

                        <button class="outline"
                            on:click={() => handle_decrese(item.id)}
                            >-</button>
                        
                    {:else}
                        <button class="outline"
                            on:click={() => add_item(item.id)}>Добавить</button>
                    {/if}

                </div>
            </footer>
        </article>

        {/each}

    </div>
    <hr>
{/each}


<MenuFooter bind:sum/>

<dialog bind:this={dialog}>
    
    <article>
        <header>
            <a href="#close" aria-label="Close" class="close"></a>
            Modal title
          </header>
    <Table bind:items = {data.items} />
        <p>kek</p>
        <button on:click={close}>eq</button>
    </article> 
</dialog>
<!-- {/if} -->
<!-- <Table bind:counter items = {data.items} /> -->
<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

<style>

dialog article{
    width: 80%;
}
    article{
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
    header{

        padding: auto 0;
        position: absolute;
        top: 0;
        margin: 0;
        width: 100%;

        /* padding: auto 0; */
    }
    button {
        min-width: min-content;
        max-height: fit-content;
    }
    /* p {
        margin: auto 0;
    } */
    /* input {
        margin: auto 0;
        padding: 0;
        text-align: center;
        height: 40px;
        padding: 0;
    } */
    /* button {
        width: min-content;
        margin: auto 0;
        height: fit-content;
        padding: 10px;
        text-align: center;
    } */
    
    /* remove  arrows */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
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
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
}

</style>
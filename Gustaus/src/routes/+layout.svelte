<script>
    import "@picocss/pico/css/pico.css"
    import Navbar from "../lib/components/Navbar.svelte";
    import { Toasts } from 'svoast'
</script>

<!-- {#if Object.is(data.dir)}
{console.log(data.dir)}
<p>connected</p>
{:else}
{console.log(data.dir)}
<mark>not connected</mark>
{/if} -->

<Navbar/>
<!-- {#if !data.hasOwnProperty('dir')}
<h1>directus is disconected</h1>
{/if} -->

<main>
    <slot/>
</main>

<Toasts position='bottom-center'/>

<style>
    p {
        text-align: center;
    }
    main {
        margin-top: 3rem;
    }
    @media (min-width: 780px) {
        main {
            margin: 0 6rem;
        }
        
    }
    :global( h1, 
            main h2, 
            main h3, 
            main h4, 
            main h5, 
            main h6, 
            main p) {
        padding: 0 0.5rem;
        font-weight: 300;
    }
    :root {
	--svoast-bar-width: 3px;
	--svoast-font-size: 19px;
	--svoast-bg: #11191f;
    }
</style>


<script>
    import "@picocss/pico/css/pico.css"
    import Navbar from "../lib/components/Navbar.svelte";
    import { Toasts } from 'svoast'
</script>

<Navbar/>

<main>
    <slot/>
</main>

<Toasts position='bottom-center'/>

<style>
    main {
        margin-top: 3rem;
    }
    @media (min-width: 780px) {
        main {
            margin: 0 6rem;
        }
        
    }
    :global(main h1, 
            main h2, 
            main h3, 
            main h4, 
            main h5, 
            main h6, 
            main p) {
        padding: 0 0.5rem;
        font-weight: 200;
    }
    :root {
	--svoast-bar-width: 3px;
	--svoast-font-size: 19px;
	--svoast-bg: #11191f;
    }
</style>


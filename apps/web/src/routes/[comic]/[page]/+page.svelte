<script lang="ts">
    import Page from "../../../components/Page/Page.svelte";
    import Nav from "../../../components/Nav/Nav.svelte";


    let {data} = $props();
    let {title, page, pagination, slug} = $derived(data);

</script>

<style>
    .container {
        @media (min-width: 1250px) {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }

</style>

<div class="container">
    <h1 class="visually-hidden">{title}</h1>
    <Page layout={page.layout} panels={page.panels} slug={slug}/>
    <Nav {pagination}/>
</div>


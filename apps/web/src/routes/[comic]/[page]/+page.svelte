<script lang="ts">
    import Page from "../../../components/Page/Page.svelte";
    import Nav from "../../../components/Nav/Nav.svelte";


    let {data} = $props();
    let {title, page, pagination, slug, style} = $derived(data);

</script>

<style>
    .container {
  
    }

</style>

<div class="container">
    <h1 class="visually-hidden">{title}</h1>
    <Page layout={page.layout} panels={page.panels} {slug} {style}/>
    <Nav {pagination}/>
</div>


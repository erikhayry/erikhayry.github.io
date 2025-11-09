<script lang="ts">
    import {resolve} from '$app/paths';
    import Page from "../../../components/Page/Page.svelte";

    let {data} = $props();
    const {slug, page, title} = data
</script>

<style>
    .title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .back-link {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
</style>

<h1 class="title">{title}</h1>

<Page layout={page.layout} panels={page.panels} slug={slug}/>

<a class="back-link" href={resolve(`/${slug}`)}>Back</a>


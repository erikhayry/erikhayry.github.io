<script lang="ts">
    import Page from "../../../components/Page/Page.svelte";


    let {data} = $props();
    let {title, page, pagination, slug} = $derived(data);

</script>

<style>
    .title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>

<h1 class="title">{title}</h1>

<Page layout={page.layout} panels={page.panels} slug={slug}/>

<nav>
    <ul>
        <li>
            <a class="back-link" href={pagination.back.href}>{pagination.back.title}</a>
        </li>
        <li>
            <a class="back-link" href={pagination.forward.href}>{pagination.forward.title}</a>
        </li>
    </ul>
</nav>


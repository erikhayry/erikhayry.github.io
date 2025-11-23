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

    .nav {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: 4px;
        box-sizing: border-box;
    }

    .nav ul {
        display: flex;
        justify-content: space-between;
        background-color: black;
        list-style: none;
        padding: 0;
        margin: 0;

    }

    .nav a {
        color: white;
        padding: 4px;
        display: inline-block;
    }
</style>

<h1 class="title">{title}</h1>

<Page layout={page.layout} panels={page.panels} slug={slug}/>

<nav class="nav">
    <ul>
        <li>
            <a class="back-link" href={pagination.back.href}>{pagination.back.title}</a>
        </li>
        <li>
            <a class="back-link" href={pagination.forward.href}>{pagination.forward.title}</a>
        </li>
    </ul>
</nav>


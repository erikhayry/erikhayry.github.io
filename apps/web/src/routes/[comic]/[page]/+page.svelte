<script lang="ts">
    import Page from "../../../components/Page/Page.svelte";
    import {i18n} from "../../../i18n/i18n";
    import {TEXT} from "../../../i18n/ui";


    let {data} = $props();
    let {title, page, pagination, slug} = $derived(data);

</script>

<style>
    .nav {
        position: absolute;
        bottom: var(--spacing);
        right: var(--spacing);
        z-index: 1;
        padding: var(--spacing);
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
        padding: var(--spacing);
        display: inline-block;
    }
</style>

<h1 class="visually-hidden">{title}</h1>

<Page layout={page.layout} panels={page.panels} slug={slug}/>

<nav aria-label={i18n(TEXT.paginationLabel)} class="nav">
    <ul>
        <li>
            <a href={pagination.back.href} rel="prev">{pagination.back.title}</a>
        </li>
        <li>
            <a href={pagination.forward.href} rel="next">{pagination.forward.title}</a>
        </li>
    </ul>
</nav>


<script lang="ts">
    import Page from "../../../components/Page/Page.svelte";
    import {i18n} from "../../../i18n/i18n";
    import {TEXT} from "../../../i18n/ui";


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

    .nav {
        padding: var(--spacing);

        @media (min-width: 1250px) {
            position: absolute;
            bottom: var(--spacing);
            right: var(--spacing);
            z-index: 1;
        }
    }

    .nav ul {
        display: flex;
        justify-content: space-between;

        @media (min-width: 1250px) {
            background-color: black;
        }
    }

    .nav a {
        padding: var(--spacing);
        display: inline-block;
        color: white;

        @media (min-width: 1250px) {
            color: white;
        }
    }
</style>

<div class="container">

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
</div>


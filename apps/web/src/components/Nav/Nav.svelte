<script>
    import {i18n} from "../../i18n/i18n";
    import {TEXT} from "../../i18n/ui";
    import Arrow from '$lib/assets/icons/next.svelte'

    let {pagination} = $props();

</script>

<style>

    nav {
        position: sticky;
        bottom: 0;
        width: 100%;


        @media (min-width: 1250px) {
            position: fixed;
            top: 50%;
            bottom: unset;
            z-index: 1;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
    }

    a {
        padding: var(--spacing);
        display: inline-block;
    }

    li :global(svg) {
        width: var(--click-area);
        height: var(--click-area);
        color: white;
        background-color: black;
        padding: var(--spacing-2x);
        border-radius: 50%;
    }

    li:nth-child(1) :global(svg) {
        transform: rotate(180deg);
    }
</style>

<nav aria-label={i18n(TEXT.paginationLabel)}>
    <ul>
        <li>
            <a href={pagination.back.href} rel="prev">
                <span class="visually-hidden">{pagination.back.title}</span>
                <Arrow/>
            </a>
        </li>
        <li>
            <a href={pagination.forward.href} rel="next">
                <span class="visually-hidden">{pagination.forward.title}</span>
                <Arrow/>
            </a>
        </li>
    </ul>
</nav>
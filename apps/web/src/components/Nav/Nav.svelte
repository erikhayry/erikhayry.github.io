<script>
    import {i18n} from "../../i18n/i18n";
    import {TEXT} from "../../i18n/ui";
    import Arrow from '$lib/assets/icons/next.svelte'

    let {pagination} = $props();

</script>

<style>
    nav {
        position: fixed;
        top: 50%;
        bottom: unset;
        z-index: 1;
        width: 100%;
    }

    ul {
        display: flex;
        justify-content: space-between;
        padding-right: calc(env(safe-area-inset-right) + var(--spacing));
        padding-left: calc(env(safe-area-inset-left) + var(--spacing));

    }

    a {
        padding: var(--spacing);
        display: inline-block;
    }

    li :global(svg) {
        width: var(--click-area);
        height: var(--click-area);
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
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
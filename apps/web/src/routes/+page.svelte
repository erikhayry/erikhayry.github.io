<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {CURRENT_LANGUAGE, i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {ComicStyle} from "@library/types";
    import ResponsiveImage from "../components/Page/components/ResponsiveImage.svelte";
</script>

<style>
    .root {
        height: 100dvh;
        width: 100dvw;
        overflow: hidden;
        background-color: var(--black);
    }

    .title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: var(--font-size-s);
        position: fixed;
        padding: var(--spacing);
        z-index: 1;
        left: calc(var(--safe-left-unit));
        top: var(--safe-top-unit);
        background-color: var(--black)
    }

    .comic-items {
        display: inline-flex;
        overflow: auto;
        width: 100%;
        height: 100%;
        gap: var(--spacing-2x);
    }

    .comic-item {
        min-width: 90%;
        height: 100%;
        overflow: hidden;
    }

    .comic {
        position: relative;
        display: block;
        overflow: hidden;

        &:after {
            content: attr(aria-label);
            display: block;
            position: absolute;
            bottom: var(--spacing-2x);
            left: calc(var(--safe-left-unit) + var(--spacing));
            font-size: 5rem;
            font-weight: bold;
            opacity: 0.9;
        }
    }
</style>

<div class="root">
    <h1 class="title">{i18n(TEXT.comicsHeading)}</h1>
    <ul class="comic-items">
        {#each getComics() as comic (comic)}
            <li class="comic-item">
                <a href={resolve(`/${comic.slug}/${CURRENT_LANGUAGE}/0`)} aria-label={i18n(comic.title)} class="comic">
                    <ResponsiveImage slug={comic.slug} id="comic" style={ComicStyle.ANIME} alt=""/>
                </a>
            </li>
        {/each}
    </ul>
</div>

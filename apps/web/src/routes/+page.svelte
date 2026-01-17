<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {getImageSrc} from "$core/getImageSrc";
    import {ComicStyle, ImageVariant} from "@library/types";
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
        left: 0;
        top: calc(var(--spacing-2x) * 2);
        background-color: var(--black)
    }

    .comic-items {
        display: inline-flex;
        overflow: auto;
        width: 100%;
        height: 100%;
        gap: var(--spacing-2x);
        padding: var(--spacing-2x);
    }

    .comic-item {
        min-width: 90%;
        height: 100%;
        overflow: hidden;
        border-radius: 40px;
        corner-shape: squircle;
    }

    .comic {
        position: relative;

        &:after {
            content: attr(aria-label);
            display: block;
            position: absolute;
            bottom: var(--spacing-2x);
            left: var(--spacing-2x);
            font-size: 5rem;
            font-weight: bold;
            opacity: 0.9;
        }
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<div class="root">
    <h1 class="title">{i18n(TEXT.comicsHeading)}</h1>
    <ul class="comic-items">
        {#each getComics() as comic (comic)}
            <li class="comic-item">
                <a href={resolve(`/${comic.slug}/0`)} aria-label={i18n(comic.title)} class="comic">
                    <picture>
                        <source srcset={getImageSrc(comic.slug, 'comic', ComicStyle.ANIME, ImageVariant.Portrait)}
                                media="(orientation: portrait)"/>
                        <img class="image" width="100%" height="auto"
                             src={getImageSrc(comic.slug, 'comic', ComicStyle.ANIME, ImageVariant.Landscape)} alt=""/>
                    </picture>
                </a>
            </li>
        {/each}
    </ul>
</div>

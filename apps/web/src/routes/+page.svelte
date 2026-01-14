<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {getImageSrc} from "$core/getImageSrc";
    import {ComicStyle, ImageVariant} from "@library/types";
</script>

<style>
    .comic {
        position: relative;

        &:after {
            content: attr(aria-label);
            display: block;
            position: absolute;
            bottom: calc(var(--spacing) * 2);
            left: calc(var(--spacing) * 2);
            font-size: 5rem;
            font-weight: bold;
            opacity: 0.9;
        }
    }

    .cover {
        width: 100%;

        @media (orientation: landscape) {
            width: 600px;
            height: auto;
        }
    }
</style>

<h1>{i18n(TEXT.comicsHeading)}</h1>

<ul>
    {#each getComics() as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}/0`)} aria-label={i18n(comic.title)} class="comic">
                <picture>
                    <source srcset={getImageSrc(comic.slug, 'comic', ComicStyle.ANIME, ImageVariant.Portrait)}
                            media="(orientation: portrait)"/>
                    <img class="cover" width="100%" height="auto"
                         src={getImageSrc(comic.slug, 'comic', ComicStyle.ANIME, ImageVariant.Landscape)} alt=""/>
                </picture>
            </a>
        </li>
    {/each}
</ul>

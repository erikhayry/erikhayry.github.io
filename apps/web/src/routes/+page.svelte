<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {getImageSrc} from "$core/getImageSrc";
    import {ComicStyle, ImageVariant} from "@library/types";
</script>

<h1>{i18n(TEXT.comicsHeading)}</h1>

<ul>
    {#each getComics() as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}/0`)} aria-label={comic.slug}>
                <img width="200" height="auto"
                     src={getImageSrc(comic.slug, 'comic', ComicStyle.ANIME, ImageVariant.Portrait)} alt="">
                <br>
                {comic.slug}
            </a>
        </li>
    {/each}
</ul>

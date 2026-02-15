<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {i18n} from "../../i18n/i18n";
    import {TEXT} from "../../i18n/ui";
    import {ComicStyle, Language} from "@library/types";
    import ResponsiveImage from "../../components/Page/components/ResponsiveImage.svelte";
    import {langStore} from "$lib/stores/lang.store";
    import {get} from 'svelte/store';
</script>

<style>
    .title {
        left: var(--safe-left-unit);
    }

    .language-link {
        right: var(--safe-right-unit);
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
        height: 100%;

        &:after {
            content: attr(aria-label);
            display: block;
            position: absolute;
            bottom: var(--spacing-2x);
            left: calc(var(--safe-left-unit) + var(--spacing));
            font-size: 5rem;
            font-weight: bold;
            opacity: 1;
            word-break: break-all;
        }
    }
</style>


<div class="fullscreen-container">
    <h1 class="sticky-text title">{i18n(TEXT.comicsHeading)}</h1>
    <ul class="comic-items">
        {#each getComics() as comic (comic)}
            <li class="comic-item">
                <a href={resolve(`/${get(langStore)}/${comic.slug}`)} aria-label={i18n(comic.title)} class="comic">
                    <ResponsiveImage slug={comic.slug} id="comic" style={ComicStyle.ANIME} alt=""/>
                </a>
            </li>
        {/each}
    </ul>
    <a class="sticky-text language-link" href={resolve("/")}>{i18n(TEXT.changeLanguageLabel, Language.EN)}</a>
</div>

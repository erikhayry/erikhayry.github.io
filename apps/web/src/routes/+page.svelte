<script lang="ts">
    import {resolve} from '$app/paths';
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {ComicStyle, Language} from "@library/types";
    import {getComics} from "$core/getComics";
    import ResponsiveImage from "../components/Page/components/ResponsiveImage.svelte";

    let {data} = $props();
    let {title} = $derived(data);
</script>

<style>
    .languages {
        position: relative;
        z-index: 1;
    }

    .language-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-touch-safe);
    }

    .background {
        position: absolute;
        top: 0;
        filter: blur(10px);
        opacity: 0.3;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

</style>

<div class="content languages">
    <div class="inner-content">
        <h1>{title}</h1>
        <ol class="language-list">
            <li><a href="{resolve('/se')}">{i18n(TEXT.language, Language.SE)}</a></li>
            <li><a href="{resolve('/en')}">{i18n(TEXT.language, Language.EN)}</a></li>
        </ol>
    </div>
</div>
<div class="fullscreen-container background">
    {#each getComics() as comic (comic)}
        <ResponsiveImage slug={comic.slug} id="comic" style={ComicStyle.ANIME} alt=""/>
    {/each}
</div>

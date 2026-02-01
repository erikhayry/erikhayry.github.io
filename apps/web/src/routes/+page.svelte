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
    .language-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-touch-safe);
    }

    .comic-item {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

<div class="content">
    <div class="inner-content">
        <h1>{title}</h1>
        <ol class="language-list">
            <li><a href="{resolve('/se')}">{i18n(TEXT.language, Language.SE)}</a></li>
            <li><a href="{resolve('/en')}">{i18n(TEXT.language, Language.EN)}</a></li>
        </ol>
    </div>
</div>
<div class="fullscreen-container fullscreen-container-background">
    {#each getComics() as comic (comic)}
        <div class="comic-item">
            <ResponsiveImage slug={comic.slug} id="comic" style={ComicStyle.ANIME} alt=""/>
        </div>
    {/each}
</div>

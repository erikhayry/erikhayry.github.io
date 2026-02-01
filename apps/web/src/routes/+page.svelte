<script lang="ts">
    import {resolve} from '$app/paths';
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {ComicStyle, Language} from "@library/types";
    import ResponsiveImage from "../components/Page/components/ResponsiveImage.svelte";

    let {data} = $props();
    let {title, backgroundImages} = $derived(data);
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
        height: 100%;
        filter: blur(10px);
        opacity: 0.3;
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
    {#each backgroundImages as image (image)}
        <div class="comic-item" style:clip-path={image.clipPath}>
            <ResponsiveImage slug={image.slug} id="comic" style={ComicStyle.ANIME} alt=""/>
        </div>
    {/each}
</div>

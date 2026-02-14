<script lang="ts">
    import {i18n} from "../../../i18n/i18n";
    import {resolve} from "$app/paths";
    import {TEXT} from "../../../i18n/ui";
    import {ComicStyle} from "@library/types";
    import ResponsiveImage from "../../../components/Page/components/ResponsiveImage.svelte";

    let {data} = $props();
    let {comic, lang, numberOfPages} = $derived(data);
</script>

<style>
    .title {
        left: calc(var(--safe-left-unit));
    }
</style>

<svelte:head>
    <title>{i18n(comic.title)}</title>
</svelte:head>


<div class="content">
    <h1 class="sticky-text title">{i18n(comic.title)}</h1>
    <div class="inner-content">
        <p>{numberOfPages}</p>
        <a href={resolve(`/${lang}/${comic.slug}/0`)}>{i18n(TEXT.startReadingPageByPage)}</a>
        <a href={resolve(`/${lang}/${comic.slug}/flow`)}>{i18n(TEXT.startReadingFlowVersion)}</a>
        <a href={resolve(`/${lang}`)}>{i18n(TEXT.backToComics)}</a>
    </div>
</div>
<div class="fullscreen-container fullscreen-container-background background">
    <ResponsiveImage alt="" id="comic" slug={comic.slug} style={ComicStyle.ANIME}/>
</div>


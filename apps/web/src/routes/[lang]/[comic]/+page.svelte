<script lang="ts">
    import {i18n} from "../../../i18n/i18n";
    import {resolve} from "$app/paths";
    import {TEXT} from "../../../i18n/ui";
    import {ComicStyle} from "@library/types";
    import ResponsiveImage from "../../../components/Page/components/ResponsiveImage.svelte";

    let {data} = $props();
    let {comic, lang} = $derived(data);
</script>

<div class="content">
    <div class="inner-content">
        <h1>{i18n(comic.title)}</h1>

        <p>Sidor: {comic.pages.length}</p>

        <a href={resolve(`/${lang}/${comic.slug}/0`)}>{i18n(TEXT.startReading)}</a>

        <a href={resolve(`/${lang}`)}>{i18n(TEXT.backToComics)}</a>
    </div>
</div>
<div class="fullscreen-container fullscreen-container-background">
    <ResponsiveImage alt="" id="comic" slug={comic.slug} style={ComicStyle.ANIME}/>
</div>


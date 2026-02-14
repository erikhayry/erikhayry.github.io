<script lang="ts">
    import {i18n} from "../../../../i18n/i18n";
    import {TEXT} from "../../../../i18n/ui";
    import {resolve} from "$app/paths";
    import PanelImage from "../../../../components/Page/components/PanelImage/PanelImage.svelte";


    let {data} = $props();
    let {title, pages, slug, style, lang} = $derived(data);
</script>

<style>
    .panel {
        overflow: hidden;
        height: 90dvh;
        position: relative;
        margin-bottom: var(--spacing);
    }

    .footer {
        padding: var(--spacing-2x) var(--safe-right-unit) calc(var(--safe-bottom-unit) + var(--spacing-2x)) var(--safe-left-unit);
    }
</style>


<h1 class="visually-hidden">{title}</h1>

<div>
    {#each pages as page(page)}
        {#each page.panels as panel(panel)}
            <div class="panel">
                <PanelImage {slug} {panel} {style} {lang}/>
            </div>
        {/each}
    {/each}

    <div class="footer">
        <a href={resolve(`/${lang}`)}>{i18n(TEXT.backToComics)}</a>
    </div>
</div>


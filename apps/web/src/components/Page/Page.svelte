<script lang="ts">
    import {type ComicStyleType, type LanguageType, type PageLayoutValue, type Panel} from "@library/types";
    import PanelImage from "./components/PanelImage/PanelImage.svelte";
    import {PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID} from "./constants";
    import {getLayoutClassName} from "./utils/getLayoutClassName";

    interface Props {
        slug: string;
        panels: Panel[]
        layout: PageLayoutValue
        style: ComicStyleType
        lang: LanguageType
        pageNumber: string
    }

    let {panels, slug, layout, style, lang, pageNumber}: Props = $props();
    let classes = $derived(getLayoutClassName(layout))
</script>

<style>
    .page {
        --panel-bottom-space: 0dvh;
        position: relative;
        width: 100dvw;
        height: calc(100dvh - var(--panel-bottom-space));

        @media only screen and (min-width: 2048px) and (max-aspect-ratio: 1.4) and (orientation: landscape) {
            display: grid;
            justify-self: center;
            align-items: center;
            gap: var(--spacing);
        }
    }

    .layout-1 {
        --panel-bottom-space: 0dvh;
        @media only screen and (min-width: 2048px) and (max-aspect-ratio: 1.4) and (orientation: landscape) {
            width: 100dvw;
            height: 100dvh;
            grid-template-areas:
            "a";
        }
    }

    .layout-3, .layout-2 {
        --panel-bottom-space: 5dvh;

        @media only screen and (min-width: 2048px) and (max-aspect-ratio: 1.4) and (orientation: landscape) {
            aspect-ratio: 1;
            width: auto;
            height: 100dvh;
            grid-template-areas:
                    "a"
                    "b"
        }

    }

    .layout-4 {
        --panel-bottom-space: 5dvh;
        @media only screen and (min-width: 2048px) and (max-aspect-ratio: 1.4) and (orientation: landscape) {
            width: 100dvw;
            height: 100dvh;
            grid-template-areas:
            "a b"
            "c d"
        }

    }

    .panel {
        overflow: hidden;
        height: 100%;
        position: relative;
        margin-bottom: var(--spacing);
    }

    .panel-a {
        grid-area: a;
    }

    .panel-b {
        grid-area: b;
    }

    .panel-c {
        grid-area: c;
    }

    .panel-d {
        grid-area: d;
    }
</style>

<div class={`page ${classes.page}`} data-testid={PAGE_CONTAINER_TEST_ID}>
    {#each panels as panel, index (panel)}
        <div class={`panel ${classes.panel[index]}`} data-testid={PANEL_CONTAINER_TEST_ID}>
            <PanelImage {slug} {panel} {style} {lang} {pageNumber}/>
        </div>
    {/each}
</div>


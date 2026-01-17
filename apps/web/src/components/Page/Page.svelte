<script lang="ts">
    import {type ComicStyleType, type PageLayoutValue, type Panel} from "@library/types";
    import PanelImage from "./components/PanelImage/PanelImage.svelte";
    import {PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID} from "./constants";
    import {getLayoutClassName} from "./utils/getLayoutClassName";

    interface Props {
        slug: string;
        panels: Panel[]
        layout: PageLayoutValue
        style: ComicStyleType
    }

    let {panels, slug, layout, style}: Props = $props();
    let classes = $derived(getLayoutClassName(layout))
</script>

<style>
    .page {
        position: relative;
        height: 100dvh;
    }

    .panel {
        overflow: hidden;
        height: 100%;
        position: relative;
        margin-bottom: var(--spacing);
    }

    .layout-1 {
        height: 100dvh;
        width: 100dvw;
        grid-template-areas:
            "a";
    }

    .layout-2 {
        height: 95dvh;
        grid-template-areas:
            "a"
            "b"
    }

    .layout-3 {
        height: 95dvh;
        grid-template-areas:
            "a b"
    }

    .layout-4 {
        height: 95dvh;
        grid-template-areas:
            "a b"
            "c d"
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
            <PanelImage {slug} {panel} {style}/>
        </div>
    {/each}
</div>


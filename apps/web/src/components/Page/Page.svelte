<script lang="ts">
    import type {PageLayoutValue, Panel} from "@library/types";
    import PanelImage from "./components/PanelImage/PanelImage.svelte";
    import {PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID} from "./constants";
    import {getLayoutClassName} from "./utils/getLayoutClassName";

    interface Props {
        slug: string;
        panels: Panel[]
        layout: PageLayoutValue
    }

    let {panels, slug, layout}: Props = $props();
    let classes = $derived(getLayoutClassName(layout))
</script>

<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2x);


        @media (min-width: 1250px) {
            gap: var(--panel-border);
            padding: var(--panel-border);
            display: grid;
            overflow: hidden;
            width: auto;
            height: 100%;
            aspect-ratio: 2 / 1;
        }
    }

    .panel {
        overflow: hidden;

        @media (min-width: 1250px) {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }

    .layout-1 {
        grid-template-areas:
            "a";
    }

    .layout-2 {
        grid-template-areas:
            "a"
            "b"
    }

    .layout-3 {
        grid-template-areas:
            "a b"
    }

    .layout-4 {
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
            <PanelImage {slug} {panel}/>
        </div>
    {/each}
</div>


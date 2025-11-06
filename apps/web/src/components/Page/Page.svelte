<script lang="ts">
    import type {PageLayoutValue, Panel} from "@library/types";
    import Img from "../PanelImage/PanelImage.svelte";
    import {PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID} from "./constants";
    import {getLayoutClassName} from "./utils/getLayoutClassName";

    interface Props {
        slug: string;
        panels: Panel[]
        layout: PageLayoutValue
    }

    let {panels, slug, layout}: Props = $props();
    const classes = getLayoutClassName(layout)
</script>

<style>
    .page {
        position: relative;
        gap: 1rem;
        display: grid;
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
            "a"
            "b"
            "c"
    }

    .layout-4 {
        grid-template-areas:
            "a b"
            "c d"
    }

    .panel {
        width: 100%;
        height: auto;
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
            <Img {slug} {panel}/>
        </div>
    {/each}
</div>


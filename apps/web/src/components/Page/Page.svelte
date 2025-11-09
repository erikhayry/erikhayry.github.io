<script lang="ts">
    import type {PageLayoutValue, Panel} from "@library/types";
    import Img from "./components/PanelImage/PanelImage.svelte";
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
        display: grid;
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 8px;
    }

    .panel {
        overflow: hidden;
        border-color: #fff;
        border-width: 8px;
        border-style: solid;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
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
            <Img {slug} {panel} alt="TODO"/>
        </div>
    {/each}
</div>


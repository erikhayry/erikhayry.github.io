<script lang="ts">
    import type {PageLayoutValue, Panel} from "@library/types";
    import Img from "../PanelImage/PanelImage.svelte";

    interface Props {
        slug: string;
        panels: Panel[]
        layout: PageLayoutValue
    }

    let {panels, slug, layout}: Props = $props();
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

    .panel {
        width: 100%;
        height: auto;
    }

    .panel-a {
        grid-area: a;
    }
</style>

<div class="page layout-1">
    {#each panels as panel (panel)}
        <div class="panel panel-a">
            <Img {slug} {panel}/>
        </div>
    {/each}
</div>


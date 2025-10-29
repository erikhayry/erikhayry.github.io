<script lang="ts">
    import type {Panel} from "@library/types";
    import Img from "../PanelImage/PanelImage.svelte";

    interface Props {
        slug: string;
        panels: Panel[]
    }

    let {panels, slug}: Props = $props();
</script>

<style>
    .page {
        position: relative;
        display: flex;
        gap: 1rem;
    }

    .panel {
        width: 100px;
        height: auto;
    }
</style>

<div class="page">
    {#each panels as panel (panel)}
        <div class="panel">
            <Img {slug} {panel}/>
        </div>
    {/each}
</div>


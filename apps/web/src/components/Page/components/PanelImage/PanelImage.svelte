<script lang="ts">
    import {getSrc} from "./utils/getSrc";
    import type {Panel} from "@library/types";

    interface Props {
        slug: string;
        panel: Panel
        alt: string;
    }

    let {slug, panel, alt}: Props = $props();
    const src = getSrc(slug, panel.id)
</script>

<style>
    .panel-image {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .narration {
        position: absolute;
        width: fit-content;
        background-color: white;
        padding: 4px;
        bottom: 4px;
        left: 4px;
        border: 2px solid black
    }
</style>


<img {alt} aria-describedby={panel.id} class="panel-image" height="auto" {src} width="100%"/>
{#if panel.narration}
    <p id={panel.id} class="narration">{panel.narration}</p>
{/if}
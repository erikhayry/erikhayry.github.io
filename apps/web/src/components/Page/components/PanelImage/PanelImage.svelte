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
</style>


<img {alt} aria-describedby={panel.id} class="panel-image" height="auto" {src} width="100%"/>
{#if panel.narrations?.[0]}
    <div id={panel.id}>
        {#each panel.narrations as narration (narration)}
            <p>{narration}</p>
        {/each}
    </div>
{/if}
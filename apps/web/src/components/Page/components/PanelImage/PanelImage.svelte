<script lang="ts">
    import {getSrc} from "./utils/getSrc";
    import type {Panel} from "@library/types";
    import Dialogs from "./components/Dialogs.svelte";
    import {i18n} from "../../../../i18n/i18n";

    interface Props {
        slug: string;
        panel: Panel
    }

    let {slug, panel}: Props = $props();
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


<img alt={i18n(panel.description)} aria-describedby={`${panel.id}-narration ${panel.id}-dialog`} class="panel-image"
     height="auto" {src}
     width="100%"/>
{#if panel.narration}
    <p id={`${panel.id}-narration`} class="narration">{i18n(panel.narration)}</p>
{/if}

{#if panel.dialogs}
    <Dialogs dialogs={panel.dialogs} id={panel.id}/>
{/if}
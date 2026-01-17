<script lang="ts">
    import {type ComicStyleType, type Panel} from "@library/types";
    import Dialogs from "./components/Dialogs.svelte";
    import {i18n} from "../../../../i18n/i18n";
    import ResponsiveImage from "../ResponsiveImage.svelte";

    interface Props {
        slug: string;
        panel: Panel
        style: ComicStyleType
    }

    let {slug, panel, style}: Props = $props();
</script>

<style>
    .narration {
        border: var(--bubble-border);
        position: absolute;
        bottom: var(--spacing-2x);
        right: var(--spacing-2x);
        left: var(--spacing-2x);
        width: fit-content;
        background-color: white;
        color: var(--black);
        padding: var(--spacing);
    }
</style>


<ResponsiveImage alt={i18n(panel.description)} id={panel.id} {slug} {style}/>

{#if panel.narration}
    <p class="narration">{i18n(panel.narration)}</p>
{/if}

{#if panel.dialogs}
    <Dialogs dialogs={panel.dialogs}/>
{/if}
<script lang="ts">
    import {type ComicStyleType, type Panel} from "@library/types";
    import {i18n} from "../../../../i18n/i18n";
    import ResponsiveImage from "../ResponsiveImage.svelte";
    import {getDialog} from "./utils/getDialog";

    interface Props {
        slug: string;
        panel: Panel
        style: ComicStyleType
    }

    let {slug, panel, style}: Props = $props();
</script>

<style>
    .bubble {
        border: var(--bubble-border);
        width: fit-content;
        background-color: white;
        color: var(--black);
        padding: var(--spacing);
    }

    .narration.bubble {
        position: absolute;
        top: calc(env(safe-area-inset-top) + var(--spacing-2x));
        right: calc(env(safe-area-inset-right) + var(--spacing));
        left: calc(env(safe-area-inset-left) + var(--spacing));
    }

    .dialogs {
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        position: absolute;
        bottom: calc(env(safe-area-inset-bottom) + var(--spacing-2x));
        left: calc(env(safe-area-inset-left) + var(--spacing));
        right: calc(env(safe-area-inset-right) + var(--spacing));
        transform-origin: bottom;
    }
</style>


<ResponsiveImage alt={i18n(panel.description)} id={panel.id} {slug} {style}/>

{#if panel.dialogs}
    <div class="dialogs">
        {#each panel.dialogs as dialog (dialog)}
            <p class="bubble">{getDialog(dialog)}</p>
        {/each}
    </div>
{/if}

{#if panel.narration}
    <p class="narration bubble">{i18n(panel.narration)}</p>
{/if}

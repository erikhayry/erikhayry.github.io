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
    .text {
        --bubble-top: calc(var(--safe-top-unit) + var(--spacing));
        --bubble-bottom: calc(var(--safe-bottom-unit) + var(--spacing))
    }

    :global(.panel:not(:first-of-type)) .text {
        --bubble-top: max(calc(var(--safe-top-unit) + var(--spacing) - var(--panel-bottom-space)), var(--spacing-2x))
    }

    :global(.panel:not(:last-of-type)) .text {
        --bubble-bottom: var(--spacing-2x);
    }

    .bubble {
        border: var(--bubble-border);
        width: fit-content;
        background-color: white;
        color: var(--black);
        padding: var(--spacing);
    }

    .narration.bubble {
        position: absolute;
        top: var(--bubble-top);
        left: var(--safe-left-unit);
        right: var(--safe-right-unit);

        &:only-child {
            top: unset;
            bottom: var(--bubble-bottom);
            transform-origin: bottom;
        }
    }

    .dialogs {
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        position: absolute;
        bottom: var(--bubble-bottom);
        left: var(--safe-left-unit);
        right: var(--safe-right-unit);
        transform-origin: bottom;
    }
</style>


<ResponsiveImage alt={i18n(panel.description)} id={panel.id} {slug} {style}/>

{#if panel.dialogs || panel.narration}
    <div class="text">
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
    </div>
{/if}
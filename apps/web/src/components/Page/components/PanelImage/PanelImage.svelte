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
        @media (min-width: 1250px) {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .narration {
        width: fit-content;
        background-color: white;
        border: 2px solid black;
        padding: var(--spacing);
        margin: var(--spacing) 0;

        @media (min-width: 1250px) {
            position: absolute;
            bottom: var(--spacing);
            left: var(--spacing);
        }
    }
</style>


<img alt={i18n(panel.description)} class="panel-image" height="auto" {src} width="100%"/>

{#if panel.narration}
    <p class="narration">{i18n(panel.narration)}</p>
{/if}

{#if panel.dialogs}
    <Dialogs dialogs={panel.dialogs}/>
{/if}
<script lang="ts">
    import type {Dialog} from "@library/types";
    import {getDialog} from "./utils/getDialog";

    interface Props {
        dialogs: Dialog[];
    }

    let {dialogs}: Props = $props();
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        
        @media (min-width: 1250px) {
            position: absolute;
            top: var(--spacing);
            left: var(--spacing);
        }
    }

    .dialog {
        color: black;
        padding: var(--spacing);
        width: fit-content;
        background-color: white;

        @media (min-width: 1250px) {
            border: var(--bubble-border);
        }
    }
</style>


<div class="container">
    {#each dialogs as dialog (dialog)}
        <p class="dialog">{getDialog(dialog)}</p>
    {/each}
</div>


<script lang="ts">
    import type {Dialog} from "@library/types";
    import {getDialog} from "./utils/getDialog";

    interface Props {
        dialogs: Dialog[];
    }

    let {dialogs}: Props = $props();
</script>

<style>
    .dialog {
        padding: var(--spacing);
        border: 2px solid black;
        width: fit-content;
        
        @media (min-width: 1250px) {
            position: absolute;
            background-color: white;
            top: var(--spacing);
            left: var(--spacing);
        }
    }
</style>


{#each dialogs as dialog (dialog)}
    <p class="dialog">{getDialog(dialog)}</p>
{/each}


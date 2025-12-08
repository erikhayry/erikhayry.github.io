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
            border: 2px solid black;
        }
    }
</style>


<div class="container">
    {#each dialogs as dialog (dialog)}
        <p class="dialog">{getDialog(dialog)}</p>
    {/each}
</div>

